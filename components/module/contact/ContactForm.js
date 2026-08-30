"use client";

import { useState } from "react";

import styles from "@/app/styles/contact.module.css";

const initialFormData = {
  name: "",
  phone: "",
  subject: "",
  message: "",
};

const initialStatus = {
  type: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

  const [status, setStatus] = useState(initialStatus);

  const [loading, setLoading] = useState(false);

  // =====================================================
  // Normalize phone
  // =====================================================

  function normalizePhone(phone) {
    return phone
      .trim()
      .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
      .replace(/[^\d+]/g, "");
  }

  // =====================================================
  // Handle change
  // =====================================================

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus(initialStatus);
    }
  }

  // =====================================================
  // Validate
  // =====================================================

  function validateForm() {
    const name = formData.name.trim();

    const phone = normalizePhone(formData.phone);

    if (!name) {
      return "لطفاً نام و نام خانوادگی خود را وارد کنید.";
    }

    if (name.length < 2) {
      return "نام و نام خانوادگی باید حداقل ۲ کاراکتر باشد.";
    }

    if (!phone) {
      return "لطفاً شماره تماس خود را وارد کنید.";
    }

    // شماره ایرانی
    const iranianMobilePattern = /^(\+98|0098|98|0)?9\d{9}$/;

    const normalizedIranianPhone = phone
      .replace(/^0098/, "+98")
      .replace(/^98/, "+98");

    const isIranianMobile = iranianMobilePattern.test(normalizedIranianPhone);

    // اگر شماره ایرانی نیست، حداقل اعتبار عمومی را بررسی می‌کنیم
    const digitsOnly = phone.replace(/\D/g, "");

    if (
      !isIranianMobile &&
      (digitsOnly.length < 10 || digitsOnly.length > 15)
    ) {
      return "لطفاً یک شماره تماس معتبر وارد کنید.";
    }

    return null;
  }

  // =====================================================
  // Submit
  // =====================================================

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) {
      return;
    }

    setStatus(initialStatus);

    const validationError = validateForm();

    if (validationError) {
      setStatus({
        type: "error",
        message: validationError,
      });

      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name.trim(),

          phone: formData.phone.trim(),

          subject: formData.subject.trim(),

          message: formData.message.trim(),
        }),
      });

      // =================================================
      // Safe JSON parsing
      // =================================================

      let data = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error(
          data?.message || "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید.",
        );
      }

      // =================================================
      // Success
      // =================================================

      setStatus({
        type: "success",

        message:
          data?.message ||
          "درخواست شما با موفقیت ارسال شد. به‌زودی با شما تماس می‌گیریم.",
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("CONTACT FORM ERROR:", error);

      setStatus({
        type: "error",

        message:
          error?.message ||
          "در ارسال درخواست مشکلی پیش آمد. لطفاً دوباره تلاش کنید.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* =================================================
          NAME + PHONE
      ================================================== */}

      <div className={styles.formRow}>
        {/* Name */}

        <div className={styles.field}>
          <label htmlFor="name">نام و نام خانوادگی</label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="نام و نام خانوادگی"
            autoComplete="name"
            maxLength={100}
            required
            disabled={loading}
          />
        </div>

        {/* Phone */}

        <div className={styles.field}>
          <label htmlFor="phone">شماره تماس</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0912 123 4567"
            autoComplete="tel"
            inputMode="tel"
            dir="ltr"
            maxLength={20}
            required
            disabled={loading}
          />
        </div>
      </div>

      {/* =================================================
          SUBJECT
      ================================================== */}

      <div className={styles.field}>
        <label htmlFor="subject">موضوع درخواست</label>

        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={loading}
        >
          <option value="">موضوع درخواست را انتخاب کنید</option>

          <option value="مشاوره">مشاوره</option>

          <option value="شرایط پذیرش">شرایط پذیرش</option>

          <option value="پذیرش بانوان">پذیرش بانوان</option>

          <option value="پذیرش آقایان">پذیرش آقایان</option>

          <option value="پذیرش از سراسر کشور">پذیرش از سراسر کشور</option>

          <option value="سایر موارد">سایر موارد</option>
        </select>
      </div>

      {/* =================================================
          MESSAGE
      ================================================== */}

      <div className={styles.field}>
        <label htmlFor="message">توضیحات</label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="سوال یا توضیحات خود را بنویسید..."
          rows={6}
          maxLength={2000}
          disabled={loading}
        />
      </div>

      {/* =================================================
          STATUS
      ================================================== */}

      {status.message && (
        <div
          className={
            status.type === "success"
              ? styles.successMessage
              : styles.errorMessage
          }
          role="alert"
          aria-live="polite"
        >
          {status.message}
        </div>
      )}

      {/* =================================================
          SUBMIT
      ================================================== */}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? (
          <>
            <span aria-hidden="true">⏳</span>

            <span>در حال ارسال...</span>
          </>
        ) : (
          "ارسال درخواست مشاوره"
        )}
      </button>

      {/* =================================================
          PRIVACY NOTE
      ================================================== */}

      <p className={styles.formNote}>
        اطلاعات شما صرفاً برای پاسخگویی به درخواست مشاوره استفاده خواهد شد و
        بدون هماهنگی در اختیار دیگران قرار نمی‌گیرد.
      </p>
    </form>
  );
}
