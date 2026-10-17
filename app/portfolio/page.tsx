
"use client";

import { Button } from "../components/ui/Button";
import { FaLocationArrow } from "react-icons/fa";
import PortfolioCards from "../components/Portfolio/PortfolioCards";
import { useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";

export default function PortfolioPage() {
  const router = useRouter();

  return (
    <section className="relative py-8 sm:py-10 lg:py-12">

      {/* Page Header */}
      <div className="mb-10 max-w-[850px]">

        {/* Section Label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-emerald-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
            My Selected Work
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-5 text-[32px] font-bold leading-tight tracking-tight text-white sm:text-[40px]">
          Featured{" "}
          <span className="text-emerald-400">
            Projects
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-[800px] text-[15px] leading-7 text-gray-200 sm:text-[16px] sm:leading-8">
          Explore a selection of websites and eCommerce
          experiences I've worked on using WordPress,
          Shopify, and modern frontend technologies.
          My work includes custom website development,
          responsive interfaces, Shopify theme customization,
          and React.js / Next.js projects.
        </p>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap items-center gap-5">

          <Button
            onClick={() => router.push("/contact")}
            icon={<FaLocationArrow size={17} />}
            variant="primary"
          >
            Hire Me
          </Button>

          <button
            type="button"
            onClick={() => router.push("/resume")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 transition-colors hover:text-emerald-400"
          >
            View My Resume
            <FiArrowUpRight size={17} />
          </button>

        </div>
      </div>

      {/* Divider */}
      <div className="mb-10 h-px w-full bg-gray-800" />

      {/* Portfolio Cards */}
      <PortfolioCards />

    </section>
  );
}
