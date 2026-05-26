"use client";

import Image from 'next/image' 
import { SocialIcons } from './ui/SocialIcons'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import type { FC } from "react"
import { NAV_ITEMS, NavItem } from "./ui/navigation"
import Link from 'next/link';
import { Button } from './ui/Button';
import { useRouter } from 'next/navigation';

type Props = {
  closeDrawer?: () => void;
};

export const Sidebar: FC<Props> = ({ closeDrawer }) => {

  const pathName: string = usePathname();
  const router = useRouter();

  return (
    <aside className='lg:w-[280px] bg-[#020617] p-6 flex flex-col gap-6 h-screen sticky top-0 overflow-y-auto custom-scrollbar'>
      <div className='text-center flex flex-col gap-5'>

        {/* Name */}
        <h3 className='text-gray-200 text-2xl'>
          Ashwani Shukla
        </h3>
        {/* Profile Pic */}
        <Image
          src="/profile-pic.jpg"
          width={120}
          height={120}
          alt='Profile'
          className='rounded-full mx-auto border-white border-3 shadow-2xl'
        />
        {/* Short Description */}
        <p className='text-sm text-gray-200'>I'm a <b>Professional Front-End Developer.</b> Welcome to my personal website.</p>

        {/* Social Icons */}

        <SocialIcons
          items={[
            { icon: FaLinkedinIn, target: "_blank", href: "https://www.linkedin.com/in/shuklaashwani/", label: "Linkedin" },
            { icon: FaFacebookF, href: "#", label: "Facebook" },
            { icon: FaInstagram, href: "#", label: "Instagram" },
          ]}
        />

        <hr className='border-gray-900' />

        {/* Navigation */}
        <nav className="space-y-3 text-base text-start mx-auto font-bold">

          {NAV_ITEMS.map((item: NavItem) => {
            const isActive: boolean = pathName === item.href;
            const Icon = item.icon;
           
            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.target}
                onClick={closeDrawer}
                className={`flex items-center gap-3 px-3 py-0 transition-all 
                      ${isActive ? "text-emerald-400 font-medium" : "text-gray-300 hover:text-emerald-400"}
                    `}
              >
                <div className='flex items-center gap-2'>
                  <Icon size={14} />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Hire Me */}

        <Button 
          icon={<FaLocationArrow size={18} />} 
          className="mt-4"
          onClick={() => router.push("/contact")}
          >
          <div className='text-center'>Hire Me</div>
        </Button>

      </div>
    </aside>
  )
}
