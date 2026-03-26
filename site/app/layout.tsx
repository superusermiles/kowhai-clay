import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "../site-content";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const baseUrl = "https://kowhai-clay.vercel.app";
const description =
  "Warm handmade pottery workshops, open studio memberships, and a thoughtful café journal in Raglan, Waikato.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Kōwhai & Clay | Artisan Pottery Studio & Café in Raglan",
    template: "%s | Kōwhai & Clay",
  },
  description,
  applicationName: site.name,
  keywords: [
    "Raglan pottery studio",
    "Raglan café",
    "pottery workshops Waikato",
    "open studio membership",
    "artisan ceramics New Zealand",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Kōwhai & Clay | Artisan Pottery Studio & Café in Raglan",
    description,
    url: baseUrl,
    siteName: site.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=1500&fit=crop",
        width: 1200,
        height: 1500,
        alt: "Kōwhai & Clay pottery studio and café in Raglan",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kōwhai & Clay | Artisan Pottery Studio & Café in Raglan",
    description,
    images: ["https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=1500&fit=crop"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CafeOrCoffeeShop"],
    name: site.name,
    description,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=1500&fit=crop",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Raglan",
      addressRegion: "Waikato",
      postalCode: "3225",
      addressCountry: "NZ",
    },
    telephone: site.phone,
    email: site.email,
    url: baseUrl,
    sameAs: ["https://instagram.com/kowhaiandclay"],
    servesCuisine: "Cafe",
    areaServed: "Waikato",
  };

  return (
    <html lang="en-NZ" className={`${heading.variable} ${body.variable} h-full`}>
      <body className="min-h-full bg-foam font-body text-basalt antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
