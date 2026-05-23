"use client";

import { IconType } from "react-icons";

type SocialItem = {
  icon: IconType;
  href: string;
  label?: string;
  target?: string;
};

type SocialIconsProps = {
  items: SocialItem[];
  size?: number;  
};

export const SocialIcons = ({ items, size = 16 }: SocialIconsProps) => {
  return (
    <div className="flex gap-3 justify-center">
      {items.map(({ icon: Icon, href, label, target }, index) => (
        <a
          key={index}
          href={href}
          target={target}         
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          aria-label={label}
          className="w-9 h-9 flex items-center justify-center rounded-full
                     bg-emerald-600 text-white
                     hover:bg-emerald-500 transition"
        >
          <Icon size={size} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
};
