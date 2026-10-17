
"use client";

import React from "react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import Image from "next/image";

const skills = [
  "WordPress",
  "Shopify",
  "Liquid",
  "JavaScript",
  "React.js",
  "Next.js",
];

export default function Hero() {
  const router = useRouter();

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/resume.pdf";
    link.download = "Ashwani_Shukla_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-8 lg:pb-12">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]"
      />

      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left Content */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          {/* Availability */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium tracking-wide text-emerald-400 sm:text-sm">
              Open to New Opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ashwani.
            </span>
          </h1>

          <h2 className="mb-6 max-w-2xl text-2xl font-semibold leading-snug text-gray-200 sm:text-3xl">
            Senior{" "}
            <span className="text-emerald-400">WordPress & Shopify</span>{" "}
            Developer
          </h2>

          {/* Description */}
          <p className="mb-7 max-w-xl text-base leading-8 text-gray-200 sm:text-lg">
            I specialize in building custom WordPress websites,
            Shopify stores, and high-performance eCommerce
            experiences. With 13+ years of web development
            experience, I also bring hands-on project experience
            in React.js and Next.js.
          </p>

          {/* Technology Badges */}
          <div className="mb-9 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-gray-700/70 bg-gray-800/40 px-3 py-2 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-blue-400/50 hover:text-white sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              icon={<FaArrowAltCircleRight size={18} />}
              onClick={() => router.push("/portfolio")}
              variant="primary"
            >
              View My Work
            </Button>

            <Button
              icon={<FaFileLines size={18} />}
              onClick={handleResumeDownload}
              variant="secondary"
            >
              Download Resume
            </Button>
          </div>

          {/* Location */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <FiMapPin size={16} />
              Delhi NCR, India
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />

            <span className="inline-flex items-center gap-1">
              13+ Years of Experience
              <FiArrowUpRight size={14} />
            </span>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
          <div className="group relative w-full max-w-[320px] sm:max-w-[380px]">
            {/* Image glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-2xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 p-2 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="/profile-pic.jpg"
                  alt="Ashwani Shukla - WordPress and Shopify Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 380px, 380px"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
            </div>

            {/* Decorative corner */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-2xl border-b-2 border-r-2 border-blue-400/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
