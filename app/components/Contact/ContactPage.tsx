
"use client";

import React, { useState, useRef } from "react";
import {
  FiLinkedin,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "success" | "error";

type FormErrors = Partial<
  Record<keyof ContactFormData, string>
>;

type FieldName = keyof ContactFormData;

const initialForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const requiredFields: FieldName[] = [
  "name",
  "email",
  "phone",
  "subject",
];

// Common email providers for typo detection.
// Other legitimate domains are also accepted.
const commonEmailProviders = [
  "gmail.com",
  "yahoo.com",
  "yahoo.co.in",
  "outlook.com",
  "hotmail.com",
  "hotmail.co.uk",
  "live.com",
  "icloud.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
];

// Levenshtein distance for common domain typos
function editDistance(a: string, b: string): number {
  const previous = Array.from(
    { length: b.length + 1 },
    (_, i) => i
  );

  for (let i = 1; i <= a.length; i++) {
    const current = [i];

    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] +
          (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }

    previous.splice(
      0,
      previous.length,
      ...current
    );
  }

  return previous[b.length];
}

function validateField(
  field: FieldName,
  value: string
): string {
  const trimmed = value.trim();

  switch (field) {
    case "name": {
      if (!trimmed) {
        return "Please enter your name.";
      }

      if (trimmed.length < 2) {
        return "Name must be at least 2 characters.";
      }

      if (
        !/^[\p{L}\p{M}\s.'-]+$/u.test(trimmed) ||
        !/\p{L}/u.test(trimmed)
      ) {
        return "Name must contain valid letters.";
      }

      if (
        trimmed.replace(/[^\p{L}]/gu, "").length < 2
      ) {
        return "Please enter at least 2 letters.";
      }

      return "";
    }

    case "email": {
      if (!trimmed) {
        return "Please enter your email address.";
      }

      if (trimmed.length > 254) {
        return "Email address is too long.";
      }

      // Practical email format validation
      const emailRegex =
        /^[A-Za-z0-9_%+-]+(?:\.[A-Za-z0-9_%+-]+)*@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;

      if (!emailRegex.test(trimmed)) {
        return "Please enter a valid email address.";
      }

      const domain = trimmed
        .split("@")[1]
        .toLowerCase();

      const domainParts = domain.split(".");
      const tld = domainParts.at(-1) || "";

      if (
        tld.length < 2 ||
        tld.length > 24 ||
        !/^[a-z]+$/.test(tld)
      ) {
        return "Please enter a valid email domain extension.";
      }

      // Detect likely typos of common email providers
      for (const provider of commonEmailProviders) {
        if (domain === provider) {
          return "";
        }

        // Check only domains resembling known providers.
        const distance = editDistance(
          domain,
          provider
        );

        if (distance === 1) {
          return `Please check your email domain. Did you mean ${provider}?`;
        }

        // Catch unusually long incorrect TLDs
        // for well-known provider names.
        const providerBase = provider.split(".")[0];
        const enteredBase = domainParts[0];

        if (
          enteredBase === providerBase &&
          domainParts.length === 2 &&
          tld.length > 5
        ) {
          return "Please check your email domain extension.";
        }
      }

      return "";
    }

    case "phone": {
      if (!trimmed) {
        return "Please enter your phone number.";
      }

      if (!/^\d{10}$/.test(trimmed)) {
        return "Please enter a valid 10-digit mobile number.";
      }

      if (!/^[6-9]/.test(trimmed)) {
        return "Mobile number must start with 6, 7, 8 or 9.";
      }

      if (/^(\d)\1{9}$/.test(trimmed)) {
        return "Please enter a valid mobile number.";
      }

      return "";
    }

    case "subject": {
      if (!trimmed) {
        return "Please enter a subject.";
      }

      if (trimmed.length < 3) {
        return "Subject must be at least 3 characters.";
      }

      if (!/\p{L}/u.test(trimmed)) {
        return "Subject must contain meaningful text.";
      }

      if (trimmed.length > 150) {
        return "Subject must be under 150 characters.";
      }

      return "";
    }

    case "message":
      return "";

    default:
      return "";
  }
}

export default function ContactPage() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialForm);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [touched, setTouched] =
    useState<Partial<Record<FieldName, boolean>>>(
      {}
    );

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const formRef = useRef<HTMLFormElement>(null);

  // Handle input changes
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const field = event.target.name as FieldName;
    let value = event.target.value;

    if (field === "phone") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value),
      }));
    }

    setStatus("idle");
    setErrorMessage("");
  };

  // Validate on blur
  const handleBlur = (
    event: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const field = event.target.name as FieldName;
    const value = event.target.value;

    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  // Validate all required fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const newTouched: Partial<
      Record<FieldName, boolean>
    > = {};

    requiredFields.forEach((field) => {
      newErrors[field] = validateField(
        field,
        formData[field]
      );

      newTouched[field] = true;
    });

    setErrors(newErrors);
    setTouched(newTouched);

    const firstInvalid = requiredFields.find(
      (field) => !!newErrors[field]
    );

    if (firstInvalid) {
      requestAnimationFrame(() => {
        const element = formRef.current?.querySelector<
          HTMLInputElement
        >(`[name="${firstInvalid}"]`);

        element?.focus();
      });

      return false;
    }

    return true;
  };

  // Submit to Web3Forms
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    setStatus("idle");
    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Please connect through LinkedIn."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            from_name: "Ashwani Portfolio",
            botcheck: "",
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData(initialForm);
        setErrors({});
        setTouched({});
      } else {
        setStatus("error");
        setErrorMessage(
          result.message ||
            "Unable to send your message. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `
    w-full rounded-xl
    border bg-[#101923]
    px-4 py-3.5
    text-sm text-white
    outline-none
    transition-colors duration-200
    placeholder:text-gray-400
    focus:ring-1
  `;

  const getInputClass = (field: FieldName) => `
    ${inputClass}
    ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
        : "border-gray-700 focus:border-emerald-500 focus:ring-emerald-500/20"
    }
  `;

  const fieldError = (field: FieldName) =>
    errors[field] ? (
      <p
        id={`contact-${field}-error`}
        role="alert"
        className="mt-2 flex items-start gap-1.5 text-xs leading-5 text-red-400"
      >
        <FiAlertCircle
          size={14}
          className="mt-0.5 shrink-0"
        />
        <span>{errors[field]}</span>
      </p>
    ) : null;

  return (
    <section className="py-8 sm:py-12">
      {/* Page Header */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-emerald-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            LET&apos;S CONNECT
          </span>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Get In{" "}
          <span className="text-emerald-400">
            Touch
          </span>
        </h1>

        <p className="max-w-2xl text-[15px] leading-8 text-gray-200">
          Looking for an experienced WordPress, Shopify,
          or Frontend Developer? Whether you have a job
          opportunity, a project, or a collaboration in
          mind, I&apos;d be happy to connect.
        </p>
      </div>

      {/* Contact Layout */}
      <div className="grid grid-cols-1 gap-7 xl:grid-cols-12">
        {/* Left Column */}
        <div className="space-y-6 xl:col-span-5">
          {/* Contact Information */}
          <div className="rounded-2xl border border-gray-800 bg-[#111c29] p-6 sm:p-7">
            <h2 className="mb-3 text-xl font-semibold text-white">
              Contact Information
            </h2>

            <p className="mb-7 text-sm leading-7 text-gray-200">
              Open to discussing frontend development,
              WordPress, Shopify, and relevant career
              opportunities.
            </p>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shuklaashwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-6 flex items-start gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                <FiLinkedin size={21} />
              </span>

              <span className="min-w-0">
                <span className="mb-1 block text-xs text-gray-400">
                  LinkedIn
                </span>

                <span className="flex items-center gap-2 break-all text-sm font-medium text-gray-200 transition-colors group-hover:text-emerald-400">
                  linkedin.com/in/shuklaashwani
                  <FiArrowUpRight className="shrink-0" />
                </span>
              </span>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                <FiMapPin size={21} />
              </span>

              <div>
                <span className="mb-1 block text-xs text-gray-400">
                  Location
                </span>

                <span className="text-sm font-medium text-gray-200">
                  Delhi NCR, India
                </span>
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              <h3 className="text-lg font-semibold text-white">
                Let&apos;s Work Together
              </h3>
            </div>

            <p className="mb-5 text-sm leading-7 text-gray-200">
              Interested in opportunities involving
              WordPress, Shopify, React.js, Next.js,
              and modern frontend development.
            </p>

            <a
              href="https://www.linkedin.com/in/shuklaashwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              Connect on LinkedIn
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="xl:col-span-7">
          <div className="h-full rounded-2xl border border-gray-800 bg-[#111c29] p-6 sm:p-8">
            <div className="mb-7">
              <h2 className="mb-2 text-xl font-semibold text-white">
                Send a Message
              </h2>

              <p className="text-sm leading-7 text-gray-200">
                Share a few details about your
                opportunity or project.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Your Name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.name}
                    aria-describedby={
                      errors.name
                        ? "contact-name-error"
                        : undefined
                    }
                    placeholder="Enter your name"
                    className={getInputClass("name")}
                  />

                  {fieldError("name")}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby={
                      errors.email
                        ? "contact-email-error"
                        : undefined
                    }
                    placeholder="Enter your email"
                    className={getInputClass("email")}
                  />

                  {fieldError("email")}
                </div>
              </div>

              {/* Row 2: Phone and Subject */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    required
                    minLength={10}
                    maxLength={10}
                    pattern="[6-9][0-9]{9}"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.phone}
                    aria-describedby={
                      errors.phone
                        ? "contact-phone-error"
                        : undefined
                    }
                    placeholder="Enter 10-digit mobile number"
                    className={getInputClass("phone")}
                  />

                  {fieldError("phone")}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Subject *
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    minLength={3}
                    maxLength={150}
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.subject}
                    aria-describedby={
                      errors.subject
                        ? "contact-subject-error"
                        : undefined
                    }
                    placeholder="Job opportunity / Project inquiry"
                    className={getInputClass("subject")}
                  />

                  {fieldError("subject")}
                </div>
              </div>

              {/* Message - Optional */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Your Message (Optional)
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  maxLength={3000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or project..."
                  className={`${getInputClass("message")} resize-y`}
                />
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm leading-6 text-emerald-300"
                >
                  <FiCheckCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                  />

                  <span>
                    Message sent successfully!
                    I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              {/* API Error Message */}
              {status === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-300"
                >
                  <FiAlertCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                  />

                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl bg-emerald-500
                  px-6 py-3.5
                  text-sm font-semibold
                  text-[#020617]
                  transition-all duration-300
                  hover:bg-emerald-400
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}

                <FiSend size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
