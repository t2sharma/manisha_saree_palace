import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const businessName = "Manisha Saree Palace";
const businessAddress =
  "1053 E El Camino Real STE 7, Sunnyvale, CA 94087";
const businessPhone = "+1-408-248-2851";
const businessUrl = "https://www.manishasareepalace.com";

export const metadata: Metadata = {
  title: `${businessName} | Authentic Indian Sarees & Bridal Wear in Sunnyvale`,
  description:
    "Family-owned Indian boutique in Sunnyvale offering premium sarees, bridal lehengas, salwar suits, kids' wear, men's sherwanis, accessories, and expert alterations.",
  metadataBase: new URL("https://www.manishasareepalace.com"),
  openGraph: {
    title: `${businessName} | Authentic Indian Sarees & Bridal Wear`,
    description:
      "Large selection of Indian outfits with attentive service and custom alterations in Sunnyvale, CA.",
    url: businessUrl,
    type: "website",
    siteName: businessName,
    locale: "en_US",
    images: [
      {
        url: "/images/store_front_og.jpg",
        width: 1200,
        height: 630,
        alt: `${businessName} storefront in Sunnyvale`,
      },
    ],
  },
    manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: businessName,
    description:
      "Large selection of Indian outfits, including saris and bridal wear, with attentive service and alterations.",
    image: [
      `${businessUrl}/saree1.png`,
      `${businessUrl}/saree2.png`,
      `${businessUrl}/saree3.png`,
    ],
    telephone: businessPhone,
    url: businessUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1053 E El Camino Real STE 7",
      addressLocality: "Sunnyvale",
      addressRegion: "CA",
      postalCode: "94087",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.353489,
      longitude: -122.02261,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:30",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.266,
      bestRating: 5,
      ratingCount: 120,
    },
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream motif-bg">
        <Navbar />
        <main className="flex-1 pt-20" role="main">
          {children}
        </main>
        <Footer />
        <ServiceWorkerRegister />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
