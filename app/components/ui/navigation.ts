
import type { IconType } from "react-icons";

import {
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaLaptopCode,
} from "react-icons/fa";

import { RiContactsBook3Line } from "react-icons/ri";

export type NavItem = {
  label: string;
  href: string;
  icon: IconType;
  target?: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: FaUser,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: FaBriefcase,
  },
  {
    label: "Services & Pricing",
    href: "/services-pricing",
    icon: FaLaptopCode,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: RiContactsBook3Line,
  },
];
