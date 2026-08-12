"use client";

import { useState } from "react";

import styles from "@/app/styles/contact.module.css";

const initialFormData = {
  name: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // =====================================================
  // Handle input changes
  // =====================================================

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // پاک کردن پیام خطا هنگام تغییر فرم
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  }

  // =====================================================
  // Validate form
  // =====================================================

  function validateForm() {
    const name = formData.name.trim();
    const phone = formData.phone.trim();

    if (!name) {
      return "لطفاً نام و نام خانوادگی خود را وارد کنید.";
    }

    if (name.length < 2) {
      return "نام و نام خانوادگی باید حداقل ۲ کاراکتر باشد.";
    }

    if (!phone) {
      return "لطفاً شماره تماس خود را وارد کنید.";
    }

    // حذف فاصله و کاراکترهای غیرعددی برای بررسی شماره
    const normalizedPhone = phone.replace(/\D/g, "");

    if (normalizedPhone.length < 10 || normalizedPhone.length > 15) {
      return "لطفاً یک شماره تماس معتبر وارد کنید.";
    }

    return null;
  }

  // =====================================================
  // Submit
  // =====================================================

  async function handleSubmit(event) {
    event.preventDefault();

    // جلوگیری از ارسال دوباره
    if (loading) {
      return;
    }

    setStatus({
      type: "",
      message: "",
    });

    // Validation
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

      const data = await response.json();

      // اگر API خطا برگرداند
      if (!response.ok) {
        throw new Error(data?.message || "ارسال درخواست انجام نشد.");
      }

      // موفقیت
      setStatus({
        type: "success",

        message:
          data?.message ||
          "درخواست شما با موفقیت ارسال شد. به‌زودی با شما تماس می‌گیریم.",
      });

      // پاک کردن فرم
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
            placeholder="مثلاً علی احمدی"
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
          STATUS MESSAGE
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
        اطلاعات شما صرفاً برای پاسخگویی به درخواست مشاوره استفاده خواهد شد.
      </p>
    </form>
  );
}
