
import type { Metadata } from "next";
import ContactPage from "../components/Contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Hire WordPress & Shopify Developer",

  description:
    "Contact Ashwani Shukla for professional WordPress, Shopify, WooCommerce, Elementor and custom website development services. Let's discuss your project.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Ashwani Shukla | Web Developer",
    description:
      "Looking for a WordPress or Shopify developer? Contact Ashwani Shukla to discuss your website development project.",
    url: "/contact",
    type: "website",
  },
};

export default function Contact() {
  return <ContactPage />;
}
