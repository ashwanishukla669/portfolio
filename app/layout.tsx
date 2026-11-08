
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";
import MobileNavbar from "./components/MobileNavbar";

const siteUrl = "https://ashwanidev.vercel.app";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ashwani Shukla | WordPress & Shopify Developer",
    template: "%s | Ashwani Shukla",
  },

  description:
    "Ashwani Shukla is a WordPress and Shopify developer with 10+ years of experience in Elementor, WooCommerce, custom websites and responsive web development.",

  verification: {
    google: "2pQR60GtHFhoVuyHtimQWkAU5ektx67N4br2xDPNK40",
  },

  applicationName: "Ashwani Shukla Portfolio",

  keywords: [
    "Ashwani Shukla",
    "WordPress Developer",
    "Shopify Developer",
    "Freelance Web Developer",
    "WordPress Developer India",
    "Shopify Developer India",
    "Elementor Developer",
    "WooCommerce Developer",
    "Shopify Theme Customization",
    "Next.js Developer",
    "React Developer",
    "AI Assisted Web Development",
    "Custom Website Development",
  ],

  authors: [
    {
      name: "Ashwani Shukla",
      url: siteUrl,
    },
  ],

  creator: "Ashwani Shukla",
  publisher: "Ashwani Shukla",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ashwani Shukla Portfolio",
    title: "Ashwani Shukla | WordPress & Shopify Developer",
    description:
      "Explore WordPress, Shopify, WooCommerce and custom web development projects by Ashwani Shukla.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashwani Shukla | WordPress & Shopify Developer",
    description:
      "Professional WordPress, Shopify and custom website development services.",
  },

  category: "technology",
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
            <div className="lg:max-w-[1140px] 2xl:max-w-[1240px] w-full mx-auto px-4 md:px-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
