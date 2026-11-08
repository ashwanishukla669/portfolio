
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress & Shopify Development Services",

  description:
    "Explore professional WordPress, Shopify, WooCommerce, Elementor and custom website development services by Ashwani Shukla.",

  alternates: {
    canonical: "/services-pricing",
  },

  openGraph: {
    title: "Web Development Services | Ashwani Shukla",
    description:
      "Professional WordPress, Shopify and custom website development services for businesses.",
    url: "/services-pricing",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
