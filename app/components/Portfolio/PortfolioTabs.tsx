
"use client";

type Props = {
  active: string;
  setActive: (value: string) => void;
};

const tabs = [
  { value: "all", label: "All Projects" },
  { value: "wordPress", label: "WordPress" },
  { value: "shopify", label: "Shopify" },
  { value: "react", label: "React / Next.js" },
  { value: "static", label: "Static Websites" },
];

export const PortfolioTabs = ({
  active,
  setActive,
}: Props) => {
  return (
    <div
      role="group"
      aria-label="Filter portfolio projects"
      className="mb-8 flex flex-wrap items-center justify-start gap-3"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.value;

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActive(tab.value)}
            aria-pressed={isActive}
            className={`
              rounded-full border px-5 py-2.5
              text-[13px] font-semibold
              transition-all duration-200
              sm:text-[14px]
              ${
                isActive
                  ? "border-emerald-500 bg-emerald-500 text-[#020617]"
                  : "border-gray-700 bg-[#1e293b] text-gray-200 hover:border-emerald-400 hover:text-emerald-400"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
