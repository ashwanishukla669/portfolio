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
        icon: FaUser, 
        label: "About Me", 
        href: "/" 
    },
    { 
        icon: FaLaptopCode, 
        label: "Portfolio", 
        href: "/portfolio" 
    },
    // { 
    //     icon: FaBriefcase, 
    //     label: "Services & Pricing", 
    //     href: "/services-pricing" 
    // },
    { 
        icon: FaFileAlt, 
        label: "Resume", 
        href: "/pdf/Ashwani_Shukla_ATS_Resume.pdf",
        target: "_blank" 
    },
    { 
        icon: RiContactsBook3Line, 
        label: "Contact", 
        href: "/contact" 
    }    
];