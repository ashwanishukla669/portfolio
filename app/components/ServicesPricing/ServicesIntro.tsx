
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";

export const ServicesIntro = () => {
  return (
    <section className="pt-8 pb-12 sm:pt-12">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-[#122b2b] via-[#101c2b] to-[#020617] px-6 py-10 sm:px-10 sm:py-14 lg:px-12">

        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl"
        />

        <div className="relative z-10">

          {/* Top Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-semibold tracking-wide text-emerald-400 sm:text-sm">
              Freelance Web Developer
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Professional{" "}
            <span className="text-emerald-400">
              WordPress & Shopify
            </span>{" "}
            Development Services
          </h1>

          {/* Subtitle */}
          <p className="mb-5 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg">
            Build a professional website that helps your
            business stand out online.
          </p>

          {/* Description */}
          <p className="mb-7 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
            I&apos;m a freelance web developer with
            13+ years of experience in website
            development. I specialize in WordPress,
            Shopify, WooCommerce, Elementor and
            responsive frontend development using
            modern technologies.
          </p>

          {/* Service Highlights */}
          <div className="mb-8 flex flex-wrap gap-3">
            {[
              "WordPress Development",
              "Shopify Stores",
              "WooCommerce",
              "React & Next.js",
            ].map((service) => (
              <span
                key={service}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-200 sm:text-sm"
              >
                <FiCheckCircle className="shrink-0 text-emerald-400" />
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-[#020617] shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              Let's Discuss Your Project
              <FiArrowUpRight size={18} />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
            >
              View My Portfolio
              <FiArrowUpRight size={18} />
            </Link>

          </div>

          {/* Bottom Divider */}
          <div className="my-9 h-px w-full bg-white/10" />

          {/* Trust Highlights */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <FiStar size={21} />
              </div>
              <div>
                <p className="text-lg font-bold text-white">
                  13+ Years
                </p>
                <p className="text-xs text-gray-400">
                  Development Experience
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <FiShoppingBag size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  WordPress & Shopify
                </p>
                <p className="text-xs text-gray-400">
                  Specialized Development
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <FiCode size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Custom Solutions
                </p>
                <p className="text-xs text-gray-400">
                  Built for Your Business
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
