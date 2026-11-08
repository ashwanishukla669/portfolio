
import type { Metadata } from "next";
import { ServicesIntro } from "../components/ServicesPricing/ServicesIntro";
import { ServicesPackage } from "../components/ServicesPricing/ServicesPackage";

export const metadata: Metadata = {
  title: "WordPress & Shopify Development Services",
  description:
    "Hire Ashwani Shukla for WordPress, Shopify, WooCommerce, Elementor and custom website development. Explore freelance web development services and pricing.",
  alternates: {
    canonical: "/services-pricing",
  },
  openGraph: {
    title: "Web Development Services & Pricing | Ashwani Shukla",
    description:
      "Professional WordPress, Shopify and custom website development services. Explore packages and request a quote.",
    url: "/services-pricing",
    type: "website",
  },
};

export default function Services() {
  return (
    <>
      <ServicesIntro />
      <div className="mb-10 border-b border-gray-800" />
      <ServicesPackage />     
    </>
  );
}
