import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, phone, subject, message } = body;

    // -----------------------------------------
    // Validation
    // -----------------------------------------

    if (!name?.trim()) {
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

    if (!phone?.trim()) {
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

    // -----------------------------------------
    // Check SMTP configuration
    // -----------------------------------------

    if (
      !process.env.SMTP_HOST ||
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

    // -----------------------------------------
    // Create SMTP transporter
    // -----------------------------------------

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,

      port: Number(process.env.SMTP_PORT || 465),

      secure: Number(process.env.SMTP_PORT || 465) === 465,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // -----------------------------------------
    // Email content
    // -----------------------------------------

    const emailSubject = subject?.trim()
      ? `درخواست جدید مشاوره - ${subject.trim()}`
      : "درخواست جدید مشاوره - طلوع زندگی";

    // -----------------------------------------
    // Send email
    // -----------------------------------------

    await transporter.sendMail({
      from: `"طلوع زندگی" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_EMAIL,

      replyTo: process.env.SMTP_USER,

      subject: emailSubject,

      text: `
درخواست جدید از سایت طلوع زندگی

نام:
${name.trim()}

شماره تماس:
${phone.trim()}

موضوع:
${subject?.trim() || "مشخص نشده"}

پیام:
${message?.trim() || "بدون توضیحات"}

----------------------------

این درخواست از طریق فرم تماس سایت ارسال شده است.
      `,

      html: `
        <div
          dir="rtl"
          style="
            font-family: Arial, sans-serif;
            line-height: 2;
            color: #304034;
            max-width: 700px;
            margin: 0 auto;
          "
        >

          <div
            style="
              background: #203d2a;
              color: white;
              padding: 24px;
              border-radius: 14px 14px 0 0;
            "
          >
            <h2 style="margin: 0;">
              درخواست جدید مشاوره
            </h2>

            <p style="margin: 5px 0 0;">
              کمپ طلوع زندگی
            </p>
          </div>


          <div
            style="
              padding: 25px;
              background: #f7faf5;
              border: 1px solid #e1e8df;
            "
          >

            <div style="margin-bottom: 18px;">
              <strong>نام و نام خانوادگی:</strong>
              <br />
              ${escapeHtml(name.trim())}
            </div>


            <div style="margin-bottom: 18px;">
              <strong>شماره تماس:</strong>
              <br />

              <a
                href="tel:${escapeHtml(phone.trim())}"
                style="
                  color: #3c6647;
                  text-decoration: none;
                "
              >
                ${escapeHtml(phone.trim())}
              </a>
            </div>


            <div style="margin-bottom: 18px;">
              <strong>موضوع:</strong>
              <br />
              ${escapeHtml(subject?.trim() || "مشخص نشده")}
            </div>


            <div style="margin-bottom: 18px;">
              <strong>پیام:</strong>

              <div
                style="
                  margin-top: 8px;
                  padding: 15px;
                  background: white;
                  border: 1px solid #e1e8df;
                  border-radius: 10px;
                  white-space: pre-wrap;
                "
              >
                ${escapeHtml(message?.trim() || "بدون توضیحات")}
              </div>
            </div>

          </div>


          <div
            style="
              padding: 15px;
              color: #7b847d;
              background: #ffffff;
              font-size: 12px;
              text-align: center;
            "
          >
            این پیام از طریق فرم تماس سایت
            طلوع زندگی ارسال شده است.
          </div>

        </div>
      `,
    });

    // -----------------------------------------
    // Success
    // -----------------------------------------

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
    console.error("CONTACT EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,

        message: "در ارسال درخواست مشکلی پیش آمد. لطفاً دوباره تلاش کنید.",
      },
      {
        status: 500,
      },
    );
  }
}

// -----------------------------------------
// Escape HTML
// جلوگیری از ورود HTML مخرب به ایمیل
// -----------------------------------------

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
