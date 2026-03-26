import type { Metadata } from "next";
import {
  ImageTextSplit,
  PageHero,
  SectionIntro,
  SharedPageFrame,
  TimelineSteps,
  aboutImages,
} from "../../components";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the founder, story, and values behind Kōwhai & Clay in Raglan.",
  alternates: {
    canonical: "https://kowhai-clay.vercel.app/about/",
  },
  openGraph: {
    title: "About | Kōwhai & Clay",
    description: "Meet the founder, story, and values behind Kōwhai & Clay in Raglan.",
    url: "https://kowhai-clay.vercel.app/about/",
    images: [
      {
        url: aboutImages.founder,
        width: 900,
        height: 1100,
        alt: "Founder portrait in warm natural light inside a creative studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Kōwhai & Clay",
    description: "Meet the founder, story, and values behind Kōwhai & Clay in Raglan.",
    images: [aboutImages.founder],
  },
};

export default function AboutPage() {
  return (
    <SharedPageFrame>
      <PageHero
        eyebrow="About"
        title="A handmade space built around sea light, clay, and community."
        text="Kōwhai & Clay began as a pottery room and slowly became a place where making, hospitality, and local rhythm could sit side by side."
        image={aboutImages.founder}
        alt="Founder portrait in warm natural light inside a creative studio"
      />

      <SectionIntro
        eyebrow="Our story"
        title="From design studios back to the Raglan shoreline."
        body="Founder Maia Ritchie returned home after years in Tāmaki Makaurau design studios, looking for a slower pace and a more tactile practice. What started as a small wheel room grew into a combined making and gathering space with a café at its heart."
      />

      <ImageTextSplit
        title="A founder with an editorial eye and a maker’s patience."
        body="Maia’s background in design informs the calm clarity of the studio, while her ceramics practice keeps everything grounded in material, repetition, and touch."
        image={aboutImages.founder}
        alt="Founder of the studio standing beside handmade pottery"
      />

      <ImageTextSplit
        title="The studio grew from a wheel room into a local meeting place."
        body="Shelves, kilns, glazing tables, and café service now work together as one continuous experience, inviting visitors to learn, return, and stay a little longer."
        image={aboutImages.studio}
        alt="Studio interior with shelves, pottery tools, and a welcoming shared workspace"
        reverse
      />

      <section className="space-y-8">
        <SectionIntro
          eyebrow="Timeline"
          title="Sea, clay, community, café."
          body="The story of the studio follows four connected threads that continue to shape every class, coffee, and conversation."
        />
        <TimelineSteps
          steps={[
            { title: "Sea", text: "Raglan’s black-sand coast and changing light set the pace and palette for the entire brand and space." },
            { title: "Clay", text: "Wheel practice, hand-building, and kiln work established the first studio rhythm and community of returning makers." },
            { title: "Community", text: "Workshops opened the doors wider, creating a local gathering point for curious beginners and regular potters alike." },
            { title: "Café", text: "The café completed the picture, bringing hospitality into the same handmade language as the vessels on the shelf." },
          ]}
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["Craft", "Objects and experiences made with patience, utility, and tactile warmth."],
          ["Hospitality", "Welcoming service that feels generous without ever becoming formal."],
          ["Place", "A grounded Raglan identity shaped by sea light, timber, and black-sand calm."],
          ["Sustainability", "Thoughtful materials, durable tableware, and slower systems that encourage reuse."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[24px] bg-white p-6 shadow-soft">
            <h3 className="font-heading text-3xl text-basalt">{title}</h3>
            <p className="mt-3 text-base leading-7 text-basalt/75">{text}</p>
          </div>
        ))}
      </section>

      <img src={aboutImages.detail} alt="Close-up pottery detail showing glaze texture and hand-thrown form" className="h-[460px] w-full rounded-[28px] object-cover shadow-lift" />
    </SharedPageFrame>
  );
}
