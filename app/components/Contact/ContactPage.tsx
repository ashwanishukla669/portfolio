
"use client";

import React, { useState } from "react";
import {
  FiLinkedin,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "success" | "error";

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] =
    useState<FormData>(initialForm);

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  // Handle input changes
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("idle");
    setErrorMessage("");
  };

  // Submit form to Web3Forms
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Please connect through LinkedIn."
      );
      setIsSubmitting(false);
      return;
    }

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
    border border-gray-700
    bg-[#101923]
    px-4 py-3.5
    text-sm text-white
    outline-none
    transition-colors duration-200
    placeholder:text-gray-400
    focus:border-emerald-500
    focus:ring-1 focus:ring-emerald-500/20
  `;

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
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name and Email */}
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
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
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
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
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
                  maxLength={150}
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity / Project inquiry"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  minLength={10}
                  maxLength={3000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or project..."
                  className={`${inputClass} resize-y`}
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

              {/* Error Message */}
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
