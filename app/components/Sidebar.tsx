
"use client";

import Image from "next/image";
import { SocialIcons } from "./ui/SocialIcons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import type { FC } from "react";
import { NAV_ITEMS, NavItem } from "./ui/navigation";
import Link from "next/link";
import { Button } from "./ui/Button";

type Props = {
  closeDrawer?: () => void;
};

export const Sidebar: FC<Props> = ({ closeDrawer }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleHireMe = () => {
    closeDrawer?.();
    router.push("/contact");
  };

  return (
    <aside className="sticky top-0 flex h-screen w-full flex-col overflow-y-auto bg-[#020617] px-6 py-7 custom-scrollbar lg:w-[280px]">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">

        {/* Name */}
        <Link
          href="/"
          onClick={closeDrawer}
          className="mb-6 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-emerald-400"
        >
          Ashwani Shukla
        </Link>

        {/* Profile Picture */}
        <div className="group relative mb-5">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-400/50 to-cyan-500/20 opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-100" />

          <Image
            src="/profile-pic.jpg"
            width={120}
            height={120}
            alt="Ashwani Shukla - WordPress and Shopify Developer"
            className="relative h-[120px] w-[120px] rounded-full border-[3px] border-white/80 object-cover shadow-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Professional Title */}
        <h2 className="mb-2 text-base font-semibold leading-snug text-white">
          WordPress & Shopify
          <span className="block text-emerald-400">
            Developer
          </span>
        </h2>

        {/* Short Description */}
        <p className="mb-5 max-w-[230px] text-xs leading-5 text-gray-400">
          13+ Years in Web Development
          <span className="mt-1 block">
            React.js | Next.js | Frontend
          </span>
        </p>

        {/* Social Icons */}
        <SocialIcons
          items={[
            {
              icon: FaLinkedinIn,
              target: "_blank",
              href: "https://www.linkedin.com/in/shuklaashwani/",
              label: "LinkedIn",
            },
            // {
            //   icon: FaFacebookF,
            //   href: "#",
            //   label: "Facebook",
            // },
            // {
            //   icon: FaInstagram,
            //   href: "#",
            //   label: "Instagram",
            // },
          ]}
        />

        {/* Divider */}
        <div className="my-6 h-px w-full bg-gray-800/70" />

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="w-full space-y-2"
        >
          {NAV_ITEMS.map((item: NavItem) => {
            const isActive =
              pathName === item.href ||
              (item.href !== "/" &&
                pathName.startsWith(`${item.href}/`));

            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.target}
                onClick={closeDrawer}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-emerald-400"
                }`}
              >
                <Icon
                  size={16}
                  className="shrink-0"
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Hire Me Button */}
        <div className="mt-6 w-full">
          <Button
            icon={<FaLocationArrow size={16} />}
            className="w-full"
            onClick={handleHireMe}
          >
            Hire Me
          </Button>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="mt-auto pt-8 text-center">
        <div className="border-t border-gray-800/70 pt-5">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ashwani Shukla
          </p>
        </div>
      </div>
    </aside>
  );
};
