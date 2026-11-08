
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Portfolio",

  description:
    "Explore WordPress, Shopify, WooCommerce, React and Next.js website projects developed by Ashwani Shukla. View custom websites, eCommerce stores and responsive web designs.",

  alternates: {
    canonical: "/portfolio",
  },

  openGraph: {
    title: "Web Development Portfolio | Ashwani Shukla",
    description:
      "Explore professional WordPress, Shopify, eCommerce and custom website development projects by Ashwani Shukla.",
    url: "/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
