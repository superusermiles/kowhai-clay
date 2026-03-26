import type { Metadata } from "next";
import {
  ImageTextSplit,
  PageHero,
  SectionIntro,
  SharedPageFrame,
  TimelineSteps,
  openStudio,
} from "../../components";

export const metadata: Metadata = {
  title: "Open Studio",
  description: "Flexible studio access, shelves, tools, and memberships for returning ceramic makers in Raglan.",
  alternates: {
    canonical: "https://kowhai-clay.vercel.app/open-studio/",
  },
  openGraph: {
    title: "Open Studio | Kōwhai & Clay",
    description: "Flexible studio access, shelves, tools, and memberships for returning ceramic makers in Raglan.",
    url: "https://kowhai-clay.vercel.app/open-studio/",
    images: [
      {
        url: openStudio.hero,
        width: 1200,
        height: 900,
        alt: "Sunlit pottery studio with tools and wheel stations prepared for makers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Studio | Kōwhai & Clay",
    description: "Flexible studio access, shelves, tools, and memberships for returning ceramic makers in Raglan.",
    images: [openStudio.hero],
  },
};

export default function OpenStudioPage() {
  return (
    <SharedPageFrame>
      <PageHero
        eyebrow="Open Studio"
        title="A steady place to keep your clay practice moving."
        text="For returning makers who want access to wheels, shelves, tools, and a supportive local rhythm, our open studio offers flexible ways to return to the bench."
        image={openStudio.hero}
        alt="Sunlit pottery studio with tools and wheel stations prepared for makers"
      />

      <section className="space-y-8">
        <SectionIntro
          eyebrow="Benefits"
          title="More room for routine, experimentation, and community."
          body="Open Studio is designed for independent makers who value good tools, firing support, and a welcoming room full of shared momentum."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Wheel access", "Book into supported sessions with reliable tools and room to work at your own pace."],
            ["Shelf space", "Keep works in progress, dried pieces, and studio essentials close between visits."],
            ["Firing support", "Bisque and glaze firings are coordinated through the studio with practical guidance."],
            ["Local community", "Work alongside a calm circle of regular makers, conversations, and shared learning."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[24px] bg-white p-6 shadow-soft">
              <h3 className="font-heading text-3xl text-basalt">{title}</h3>
              <p className="mt-3 text-base leading-7 text-basalt/75">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ImageTextSplit
        title="Shelves, tools, and warm studio light built into the rhythm."
        body="From trimming tools and bats to glazes and drying racks, the space is organised to feel practical rather than precious. It is a studio designed to be used often."
        image={openStudio.shelves}
        alt="Pottery shelves and tools arranged inside a calm open studio"
      />

      <section className="space-y-8">
        <SectionIntro
          eyebrow="How it works"
          title="A simple path back into regular making."
          body="Choose the access style that suits your schedule, settle into the space, and keep momentum between kiln cycles."
        />
        <TimelineSteps
          steps={[
            { title: "Choose your pass", text: "Start with a casual visit, a 10-visit bundle, or a monthly membership depending on your rhythm." },
            { title: "Settle in", text: "Get oriented with storage, wheel stations, glazing systems, and the practical flow of the space." },
            { title: "Make consistently", text: "Return often enough to build confidence, refine your forms, and stay connected with a local making community." },
            { title: "Fire and finish", text: "Coordinate glazing and firings with the studio team so your pieces move smoothly toward completion." },
          ]}
        />
      </section>

      <section className="grid gap-8 rounded-[28px] bg-sand p-8 shadow-soft lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">Membership options</p>
          <h2 className="mt-4 font-heading text-4xl text-basalt">Flexible access for casual visits or a deeper weekly practice.</h2>
          <ul className="mt-6 space-y-4 text-lg leading-8 text-basalt/80">
            <li>Casual studio pass — NZ$35</li>
            <li>10-visit pass — NZ$280</li>
            <li>Monthly membership — NZ$185</li>
          </ul>
        </div>
        <img src={openStudio.maker} alt="Maker refining a ceramic form during an open studio session" className="h-[420px] w-full rounded-[28px] object-cover shadow-lift" />
      </section>

      <section className="rounded-[28px] bg-basalt px-8 py-10 text-foam shadow-lift">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">Open Studio enquiries</p>
        <h2 className="mt-3 font-heading text-4xl">Ask about availability, kiln access, or the right pass for your practice.</h2>
        <a href="/contact/" className="mt-6 inline-flex rounded-full bg-kowhai px-6 py-3 text-sm font-semibold text-basalt">Contact the studio</a>
      </section>
    </SharedPageFrame>
  );
}
