import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// =====================================================
// RATE LIMIT
// =====================================================

const rateLimitStore = new Map();

const RATE_LIMIT = 3;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes

// =====================================================
// GET CLIENT IP
// =====================================================

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");

  if (realIp) {
    return realIp;
  }

  return "unknown";
}

// =====================================================
// CHECK RATE LIMIT
// =====================================================

function checkRateLimit(ip) {
  const now = Date.now();

  const record = rateLimitStore.get(ip);

  // First request
  if (!record) {
    rateLimitStore.set(ip, {
      count: 1,
      firstRequest: now,
    });

    return {
      allowed: true,
    };
  }

  const elapsed = now - record.firstRequest;

  // 10 minutes passed
  if (elapsed >= RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, {
      count: 1,
      firstRequest: now,
    });

    return {
      allowed: true,
    };
  }

  // Limit reached
  if (record.count >= RATE_LIMIT) {
    const remainingTime = RATE_LIMIT_WINDOW - elapsed;

    return {
      allowed: false,
      remainingTime,
    };
  }

  // Increase request count
  record.count += 1;

  rateLimitStore.set(ip, record);

  return {
    allowed: true,
  };
}

// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// =====================================================
// POST /api/contact
// =====================================================

export async function POST(request) {
  try {
    // =================================================
    // 1. RATE LIMIT
    // =================================================

    const clientIp = getClientIp(request);

    const rateLimit = checkRateLimit(clientIp);

    if (!rateLimit.allowed) {
      const remainingMinutes = Math.ceil(rateLimit.remainingTime / 60000);

      return NextResponse.json(
        {
          success: false,
          message: `تعداد درخواست‌های شما بیش از حد مجاز است. لطفاً ${remainingMinutes} دقیقه بعد دوباره تلاش کنید.`,
        },
        {
          status: 429,
        },
      );
    }

    // =================================================
    // 2. READ REQUEST BODY
    // =================================================

    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "اطلاعات ارسال‌شده معتبر نیست.",
        },
        {
          status: 400,
        },
      );
    }

    const { name, phone, subject, message } = body;

    // =================================================
    // 3. TYPE VALIDATION
    // =================================================

    if (typeof name !== "string" || typeof phone !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "اطلاعات ارسال‌شده معتبر نیست.",
        },
        {
          status: 400,
        },
      );
    }

    // =================================================
    // 4. CLEAN INPUTS
    // =================================================

    const cleanName = name.trim();

    const cleanPhone = phone.trim();

    const cleanSubject = typeof subject === "string" ? subject.trim() : "";

    const cleanMessage = typeof message === "string" ? message.trim() : "";

    // =================================================
    // 5. NAME VALIDATION
    // =================================================

    if (!cleanName) {
      return NextResponse.json(
        {
          success: false,
          message: "نام الزامی است.",
        },
        {
          status: 400,
        },
      );
    }

    if (cleanName.length < 2) {
      return NextResponse.json(
        {
          success: false,
          message: "نام واردشده معتبر نیست.",
        },
        {
          status: 400,
        },
      );
    }

    if (cleanName.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "نام بیش از حد طولانی است.",
        },
        {
          status: 400,
        },
      );
    }

    // =================================================
    // 6. PHONE VALIDATION
    // =================================================

    if (!cleanPhone) {
      return NextResponse.json(
        {
          success: false,
          message: "شماره تماس الزامی است.",
        },
        {
          status: 400,
        },
      );
    }

    const phonePattern = /^[0-9+\-\s()]+$/;

    if (!phonePattern.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          message: "شماره تماس معتبر نیست.",
        },
        {
          status: 400,
        },
      );
    }

    const normalizedPhone = cleanPhone.replace(/\D/g, "");

    if (normalizedPhone.length < 10 || normalizedPhone.length > 15) {
      return NextResponse.json(
        {
          success: false,
          message: "شماره تماس معتبر نیست.",
        },
        {
          status: 400,
        },
      );
    }

    // =================================================
    // 7. SUBJECT VALIDATION
    // =================================================

    if (cleanSubject.length > 200) {
      return NextResponse.json(
        {
          success: false,
          message: "موضوع بیش از حد طولانی است.",
        },
        {
          status: 400,
        },
      );
    }

    // =================================================
    // 8. MESSAGE VALIDATION
    // =================================================

    if (cleanMessage.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          message: "متن پیام بیش از حد طولانی است.",
        },
        {
          status: 400,
        },
      );
    }

    // =================================================
    // 9. ESCAPE USER INPUT FOR HTML EMAIL
    // =================================================

    const safeName = escapeHtml(cleanName);

    const safePhone = escapeHtml(cleanPhone);

    const safeSubject = escapeHtml(cleanSubject);

    const safeMessage = escapeHtml(cleanMessage).replace(/\r?\n/g, "<br />");

    // =================================================
    // 10. CHECK SMTP ENVIRONMENT
    // =================================================

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.CONTACT_EMAIL
    ) {
      console.error("SMTP environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "تنظیمات ارسال ایمیل کامل نیست.",
        },
        {
          status: 500,
        },
      );
    }

    // =================================================
    // 11. SMTP TRANSPORTER
    // =================================================

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,

      port: Number(process.env.SMTP_PORT),

      secure: true,

      auth: {
        user: process.env.SMTP_USER,

        pass: process.env.SMTP_PASSWORD,
      },
    });

    // =================================================
    // 12. SEND EMAIL
    // =================================================

    await transporter.sendMail({
      from: `"طلوع زندگی" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_EMAIL,

      replyTo: process.env.SMTP_USER,

      subject: cleanSubject || "درخواست جدید از سایت طلوع زندگی",

      // =================================================
      // PLAIN TEXT EMAIL
      // =================================================

      text: `
درخواست جدید از سایت طلوع زندگی

نام و نام خانوادگی:
${cleanName}

شماره تماس:
${cleanPhone}

موضوع درخواست:
${cleanSubject || "تعیین نشده"}

پیام:
${cleanMessage || "پیامی وارد نشده است"}

--------------------------------

زمان ارسال:
${new Date().toLocaleString("fa-IR")}

--------------------------------

این پیام از طریق فرم تماس سایت طلوع زندگی ارسال شده است.
      `,

      // =================================================
      // HTML EMAIL
      // =================================================

      html: `
<!DOCTYPE html>

<html
  lang="fa"
  dir="rtl"
>

<head>

  <meta
    charset="UTF-8"
  />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>
    درخواست جدید - طلوع زندگی
  </title>

</head>


<body
  style="
    margin: 0;
    padding: 0;
    background: #f4f6f2;
    font-family:
      Tahoma,
      Arial,
      sans-serif;
    color: #294430;
  "
>

  <div
    style="
      width: 100%;
      padding: 40px 15px;
      box-sizing: border-box;
    "
  >

    <div
      style="
        max-width: 650px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow:
          0 8px 30px
          rgba(0, 0, 0, 0.06);
      "
    >

      <!-- HEADER -->

      <div
        style="
          padding: 30px;
          background: #294430;
          color: #ffffff;
        "
      >

        <h1
          style="
            margin: 0;
            font-size: 24px;
            font-weight: 700;
          "
        >
          طلوع زندگی
        </h1>

        <p
          style="
            margin: 8px 0 0;
            font-size: 14px;
            opacity: 0.85;
          "
        >
          درخواست جدید از سایت
        </p>

      </div>


      <!-- CONTENT -->

      <div
        style="
          padding: 30px;
        "
      >

        <!-- NAME -->

        <div
          style="
            margin-bottom: 22px;
            padding-bottom: 18px;
            border-bottom:
              1px solid #e7ebe5;
          "
        >

          <div
            style="
              margin-bottom: 5px;
              font-size: 13px;
              color: #7b857d;
            "
          >
            نام و نام خانوادگی
          </div>

          <div
            style="
              font-size: 17px;
              font-weight: 700;
              color: #294430;
            "
          >
            ${safeName}
          </div>

        </div>


        <!-- PHONE -->

        <div
          style="
            margin-bottom: 22px;
            padding-bottom: 18px;
            border-bottom:
              1px solid #e7ebe5;
          "
        >

          <div
            style="
              margin-bottom: 5px;
              font-size: 13px;
              color: #7b857d;
            "
          >
            شماره تماس
          </div>

          <div
            dir="ltr"
            style="
              font-size: 17px;
              font-weight: 700;
              text-align: right;
              color: #294430;
            "
          >
            ${safePhone}
          </div>

        </div>


        <!-- SUBJECT -->

        <div
          style="
            margin-bottom: 22px;
            padding-bottom: 18px;
            border-bottom:
              1px solid #e7ebe5;
          "
        >

          <div
            style="
              margin-bottom: 5px;
              font-size: 13px;
              color: #7b857d;
            "
          >
            موضوع درخواست
          </div>

          <div
            style="
              font-size: 16px;
              font-weight: 600;
              color: #294430;
            "
          >
            ${safeSubject || "تعیین نشده"}
          </div>

        </div>


        <!-- MESSAGE -->

        <div
          style="
            margin-top: 25px;
            padding: 20px;
            background: #f5f7f3;
            border-radius: 12px;
          "
        >

          <div
            style="
              margin-bottom: 10px;
              font-size: 13px;
              color: #7b857d;
              font-weight: 700;
            "
          >
            پیام مراجعه‌کننده
          </div>

          <div
            style="
              font-size: 15px;
              line-height: 2;
              color: #3f4942;
              word-break: break-word;
            "
          >
            ${safeMessage || "پیامی وارد نشده است"}
          </div>

        </div>


        <!-- DATE -->

        <div
          style="
            margin-top: 25px;
            padding-top: 18px;
            border-top:
              1px solid #e7ebe5;
            font-size: 12px;
            color: #8a928c;
          "
        >

          زمان ارسال:

          ${new Date().toLocaleString("fa-IR")}

        </div>

      </div>


      <!-- FOOTER -->

      <div
        style="
          padding: 20px 30px;
          background: #f7f8f6;
          text-align: center;
          font-size: 12px;
          color: #7b857d;
        "
      >

        این پیام از طریق فرم تماس
        سایت طلوع زندگی ارسال شده است.

      </div>

    </div>

  </div>

</body>

</html>
      `,
    });

    // =================================================
    // 13. SUCCESS RESPONSE
    // =================================================

    return NextResponse.json(
      {
        success: true,

        message: "درخواست شما با موفقیت ارسال شد.",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    // =================================================
    // ERROR LOG
    // =================================================

    console.error("CONTACT API ERROR:", error);

    // =================================================
    // ERROR RESPONSE
    // =================================================

    return NextResponse.json(
      {
        success: false,

        message: "ارسال درخواست با خطا مواجه شد. لطفاً دوباره تلاش کنید.",
      },
      {
        status: 500,
      },
    );
  }
}
