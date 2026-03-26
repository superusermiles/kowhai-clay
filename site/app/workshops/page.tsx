import type { Metadata } from "next";
import {
  FaqAccordion,
  ImageTextSplit,
  PageHero,
  PricingCards,
  SectionIntro,
  SharedPageFrame,
  workshops,
} from "../../components";

export const metadata: Metadata = {
  title: "Workshops",
  description: "Beginner-friendly wheel throwing, hand-building, and private pottery sessions in Raglan.",
  alternates: {
    canonical: "https://kowhai-clay.vercel.app/workshops/",
  },
  openGraph: {
    title: "Workshops | Kōwhai & Clay",
    description: "Beginner-friendly wheel throwing, hand-building, and private pottery sessions in Raglan.",
    url: "https://kowhai-clay.vercel.app/workshops/",
    images: [
      {
        url: workshops.hero,
        width: 1200,
        height: 900,
        alt: "Ceramic workshop tables set for a pottery class in natural light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshops | Kōwhai & Clay",
    description: "Beginner-friendly wheel throwing, hand-building, and private pottery sessions in Raglan.",
    images: [workshops.hero],
  },
};

export default function WorkshopsPage() {
  return (
    <SharedPageFrame>
      <PageHero
        eyebrow="Workshops"
        title="Hands-on classes shaped for beginners and returning makers."
        text="Join wheel throwing, hand-building, and private group sessions guided with patience, good conversation, and a clear sense of process."
        image={workshops.hero}
        alt="Ceramic workshop tables set for a pottery class in natural light"
      />

      <SectionIntro
        eyebrow="Class philosophy"
        title="Practical guidance with room to enjoy the making."
        body="We keep classes small and steady so everyone can feel supported. Expect a calm introduction to clay, useful demonstrations, and enough time to experiment, glaze, and leave with pieces that carry the memory of the day."
      />

      <ImageTextSplit
        title="Wheel Throwing"
        body="Start with centering, pulling walls, and shaping simple forms. These sessions are paced for first-time potters while still feeling satisfying for anyone returning to the wheel."
        image={workshops.wheel}
        alt="Maker learning wheel throwing with wet clay and hands in motion"
      />

      <ImageTextSplit
        title="Hand Building"
        body="Explore pinch, coil, and slab techniques with a more sculptural, table-based pace. Hand-building is ideal for expressive serving pieces, candle holders, and one-off gift projects."
        image={workshops.hand}
        alt="Clay pieces and tools laid out for a hand-building pottery session"
        reverse
      />

      <ImageTextSplit
        title="Group & Private Sessions"
        body="Plan a birthday, team session, or weekend gathering with a private class that includes tailored guidance, glazing options, and a café stop woven into the day."
        image={workshops.group}
        alt="Small group pottery workshop gathered around a studio table"
      />

      <section className="space-y-8">
        <SectionIntro
          eyebrow="Sample offerings"
          title="Choose a session that matches your pace."
          body="Short introductions, longer weekend learning, and giftable shared experiences all sit within the same warm studio rhythm."
        />
        <PricingCards
          items={[
            {
              title: "First Wheel Session",
              price: "NZ$95",
              duration: "2 hours",
              description: "A gentle, practical first class covering centering, shaping, and finishing fundamentals.",
              features: ["Small group format", "Clay and firing included", "Collect finished pieces later"],
            },
            {
              title: "Hand-Build & Glaze",
              price: "NZ$85",
              duration: "2 hours",
              description: "A tactile table session for trays, mugs, and sculptural forms with glazing guidance.",
              features: ["Ideal for beginners", "Tools and aprons provided", "Take-home glazing choices"],
              highlighted: true,
            },
            {
              title: "Weekend Series",
              price: "NZ$240",
              duration: "3 sessions",
              description: "A deeper immersion across three studio visits with more time to build confidence and refine forms.",
              features: ["Throwing and glazing", "More individual feedback", "Best for returning makers"],
            },
          ]}
        />
      </section>

      <section className="space-y-8">
        <SectionIntro
          eyebrow="Questions"
          title="Everything you need before you book."
          body="A few practical details to make arriving, dressing, and planning your class feel easy."
        />
        <FaqAccordion
          items={[
            {
              question: "Do I need any pottery experience?",
              answer: "No. Most guests arrive as complete beginners, and the class pacing is designed to make the process approachable from the first touch of clay.",
            },
            {
              question: "What should I wear?",
              answer: "Choose comfortable clothes you do not mind getting dusty, plus flat closed shoes. Aprons are available in the studio.",
            },
            {
              question: "When do I collect finished pieces?",
              answer: "Pieces are glazed and fired after class. We will let you know when they are ready for pickup, usually within a few weeks depending on kiln cycles.",
            },
          ]}
        />
      </section>

      <section className="rounded-[28px] bg-basalt px-8 py-10 text-foam shadow-lift">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">Ready to join us?</p>
            <h2 className="mt-3 font-heading text-4xl">Book your first session or ask about private gatherings.</h2>
          </div>
          <a href="/contact/" className="inline-flex rounded-full bg-kowhai px-6 py-3 text-sm font-semibold text-basalt">Start an enquiry</a>
        </div>
      </section>
    </SharedPageFrame>
  );
}
