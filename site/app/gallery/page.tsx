import type { Metadata } from "next";
import { GalleryMasonry, PageHero, SectionIntro, SharedPageFrame } from "../../components";
import { galleryImages } from "../../site-content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A curated look at pottery, process, shelves, café details, and the atmosphere of Kōwhai & Clay.",
  alternates: {
    canonical: "https://kowhai-clay.vercel.app/gallery/",
  },
  openGraph: {
    title: "Gallery | Kōwhai & Clay",
    description: "A curated look at pottery, process, shelves, café details, and the atmosphere of Kōwhai & Clay.",
    url: "https://kowhai-clay.vercel.app/gallery/",
    images: [
      {
        url: galleryImages[0].src,
        width: 800,
        height: 1000,
        alt: galleryImages[0].alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Kōwhai & Clay",
    description: "A curated look at pottery, process, shelves, café details, and the atmosphere of Kōwhai & Clay.",
    images: [galleryImages[0].src],
  },
};

export default function GalleryPage() {
  return (
    <SharedPageFrame>
      <PageHero
        eyebrow="Gallery"
        title="Pottery, process, coffee, and the details that make the place."
        text="A loose visual journal of shelves, hands, cups, kiln-day textures, and coastal light moving through the studio and café."
        image={galleryImages[0].src}
        alt="Studio shelves filled with handmade pottery and warm natural light"
      />

      <SectionIntro
        eyebrow="Visual journal"
        title="An uneven rhythm of making and gathering."
        body="From wheel-side concentration to coffee poured into handmade cups, the gallery captures the tactile moments that shape the atmosphere of Kōwhai & Clay."
      />

      <GalleryMasonry />
    </SharedPageFrame>
  );
}
