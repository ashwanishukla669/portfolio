
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiMonitor,
  FiShoppingBag,
  FiGlobe,
} from "react-icons/fi";

const packages = [
  {
    name: "Static Website",
    subtitle: "For a simple online presence",
    price: "₹7,999",
    delivery: "5–7 working days",
    icon: FiGlobe,
    popular: false,
    features: [
      "Up to 3 responsive pages",
      "HTML, CSS & JavaScript",
      "Basic contact form",
      "Basic SEO metadata",
      "Mobile-friendly layout",
      "1 revision round",
    ],
  },
  {
    name: "WordPress Website",
    subtitle: "For small businesses",
    price: "₹12,999",
    delivery: "7–10 working days",
    icon: FiMonitor,
    popular: true,
    features: [
      "Up to 5 website pages",
      "WordPress & Elementor",
      "Theme customization",
      "Contact form integration",
      "Basic on-page SEO setup",
      "2 revision rounds",
    ],
  },
  {
    name: "React / Next.js",
    subtitle: "For modern frontend websites",
    price: "₹19,999",
    delivery: "10–15 working days",
    icon: FiCode,
    popular: false,
    features: [
      "Up to 5 frontend pages",
      "React or Next.js",
      "Responsive UI development",
      "Basic SEO metadata",
      "Deployment assistance",
      "2 revision rounds",
    ],
  },
  {
    name: "Shopify Store",
    subtitle: "For new eCommerce businesses",
    price: "₹14,999",
    delivery: "7–12 working days",
    icon: FiShoppingBag,
    popular: true,
    features: [
      "Shopify store setup",
      "Free theme customization",
      "Up to 10 product listings",
      "Collections & navigation",
      "Payment setup assistance",
      "Basic store SEO setup",
      "2 revision rounds",
    ],
  },
];

export const ServicesPackage = () => {
  return (
    <section className="pb-14">
      <div className="mb-9">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-emerald-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
            Affordable Development Packages
          </span>
        </div>

        <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
          Simple & Transparent{" "}
          <span className="text-emerald-400">
            Pricing
          </span>
        </h2>

        <p className="max-w-3xl text-sm leading-7 text-gray-300">
          Affordable website development packages for
          small businesses, startups and entrepreneurs.
          Choose a starter package or request a custom
          quote for your project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {packages.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border bg-[#111c29] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 ${
                item.popular
                  ? "border-emerald-500/40"
                  : "border-gray-800 hover:border-emerald-500/30"
              }`}
            >
              {item.popular && (
                <div className="absolute right-0 top-0 rounded-bl-xl bg-emerald-500 px-3 py-1.5 text-[11px] font-bold text-[#020617]">
                  CORE SERVICE
                </div>
              )}

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Icon size={23} />
              </div>

              <h3 className="mb-1 text-xl font-bold text-white">
                {item.name}
              </h3>

              <p className="mb-6 text-sm text-gray-400">
                {item.subtitle}
              </p>

              <div className="mb-6 border-b border-gray-800 pb-6">
                <p className="mb-1 text-xs text-gray-400">
                  Starting from
                </p>

                <p className="text-4xl font-extrabold tracking-tight text-white">
                  {item.price}
                </p>

                <p className="mt-2 text-xs text-emerald-400">
                  Estimated delivery: {item.delivery}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <FiCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-colors ${
                  item.popular
                    ? "bg-emerald-500 text-[#020617] hover:bg-emerald-400"
                    : "border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
                }`}
              >
                Get a Free Quote
                <FiArrowUpRight size={18} />
              </Link>
            </article>
          );
        })}
      </div>

      <div className="mt-7 rounded-xl border border-gray-800 bg-[#111827] p-5">
        <p className="text-sm leading-7 text-gray-300">
          <span className="font-semibold text-white">
            Need something custom?
          </span>{" "}
          These packages cover starter-level projects.
          Additional pages, advanced functionality,
          custom integrations and ongoing maintenance
          are quoted separately. Domain, hosting,
          Shopify subscriptions and paid plugins are
          not included unless agreed in writing.
        </p>
      </div>
    </section>
  );
};
