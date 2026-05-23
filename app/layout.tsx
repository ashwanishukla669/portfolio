import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";

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
       <div className="flex min-h-screen"> 
        <Sidebar />
        <main className="bg-[#111821] flex-1">
          <div className="max-w-[1140px] 2xl:max-w-[1240px] w-full mx-auto px-4 md:px-10 ">
            {children}
          </div>
        </main>
        </div>
      </body>
    </html>
  );
}
