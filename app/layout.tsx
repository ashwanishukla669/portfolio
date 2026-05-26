import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";
import MobileNavbar from "./components/MobileNavbar";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ashwani Shukla",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      
        suppressHydrationWarning
        className={`${lato.variable} antialiased`}
      >
       <div className="flex flex-col lg:flex-row min-h-[calc(100vh-70px)] lg:min-h-screen pt-[50px] lg:pt-0"> 
        <div className="hidden lg:flex">
          <Sidebar />          
        </div>

        {/* Mobile Navbar */}

        <div className="lg:hidden flex">          
          <MobileNavbar />
        </div>

        <main className="bg-[#111821] flex-1">
          <div className="lg:max-w-[1140px] 2xl:max-w-[1240px] w-full mx-auto px-4 md:px-10 ">
            {children}
          </div>
        </main>
        </div>
      </body>
    </html>
  );
}
