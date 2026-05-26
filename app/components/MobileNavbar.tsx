"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Sidebar } from "@/app/components/Sidebar"

const MobileNavbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Top Navbar */}

            <div className="lg:hidden fixed top-0 w-full h-[70px] bg-[#020617] border-b border-gray-800 z-50 px-4 flex items-center">

                {/* Hamburger */}
                <button onClick={() => setOpen(true)}>
                    <Menu className="text-white" size={28} />
                </button>

                {/* Logo Name */}

                <h2 className="absolute left-1/2 -translate-x-1/2 text-white font-bold text-xl">
                    Ashwani Shukla
                </h2>

                {/* Overlay */}

                {open && (
                    <div
                        className="fixed inset-0 bg-black/50 z-50" onClick={() => setOpen(false)}
                    />
                )}

                {/* Sidebar Drawer */}
                <div className={`fixed top-0 left-0 h-full w-[280px] bg-[#020617] z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
                >

                    {/* Close Button */}
                    <div className="flex justify-end p-4">

                        <button onClick={() => setOpen(false)}>
                            <X className="text-white" size={28} />
                        </button>

                    </div>

                    <Sidebar closeDrawer={() => setOpen(false)} />

                </div>

            </div>
        </>
    )
}

export default MobileNavbar