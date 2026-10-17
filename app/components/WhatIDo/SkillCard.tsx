
import React from "react";
import type { IconType } from "react-icons";

type SkillCardProps = {
  title: string;
  description: string;
  icon: IconType[];
};

export default function SkillCard({
  title,
  description,
  icon,
}: SkillCardProps) {
  return (
    <article
      className="
        group relative flex h-full flex-col
        rounded-2xl border border-gray-800
        bg-[#111c29]/50
        p-5 sm:p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-emerald-500/50
        hover:bg-[#172433]
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]
      "
    >
      {/* Icons */}
      <div className="mb-5 flex min-h-[32px] items-center gap-3 text-emerald-400">
        {icon.map((Icon, index) => (
          <Icon
            key={index}
            size={25}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        ))}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-[17px] font-semibold leading-6 text-white sm:text-[18px]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] leading-7 text-gray-200 sm:text-[15px]">
        {description}
      </p>

      {/* Bottom Accent */}
      <div
        aria-hidden="true"
        className="mt-auto pt-5"
      >
        <div className="h-[2px] w-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover:w-12" />
      </div>
    </article>
  );
}
