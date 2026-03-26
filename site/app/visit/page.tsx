import type { Metadata } from "next";
import { PageHero, SectionIntro, SharedPageFrame, site, visitImages } from "../../components";

export const metadata: Metadata = {
  title: "Visit",
  description: "Address, hours, parking, and what to expect when visiting Kōwhai & Clay in Raglan.",
  alternates: {
    canonical: "https://kowhai-clay.vercel.app/visit/",
  },
  openGraph: {
    title: "Visit | Kōwhai & Clay",
    description: "Address, hours, parking, and what to expect when visiting Kōwhai & Clay in Raglan.",
    url: "https://kowhai-clay.vercel.app/visit/",
    images: [
      {
        url: visitImages.hero,
        width: 1200,
        height: 900,
        alt: "Exterior arrival scene for a warm hospitality space in Raglan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit | Kōwhai & Clay",
    description: "Address, hours, parking, and what to expect when visiting Kōwhai & Clay in Raglan.",
    images: [visitImages.hero],
  },
};

export default function VisitPage() {
  return (
    <SharedPageFrame>
      <PageHero
        eyebrow="Visit"
        title="Plan a studio class, café stop, or slow morning by the waterfront."
        text="You will find Kōwhai & Clay on Bow Street in central Raglan, with pottery classes, café service, and the harbour only a short walk away."
        image={visitImages.hero}
        alt="Exterior arrival scene for a warm hospitality space in Raglan"
      />

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[28px] bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">Address</p>
          <h2 className="mt-3 font-heading text-4xl text-basalt">{site.address}</h2>
          <p className="mt-4 text-lg leading-8 text-basalt/80">A central Bow Street location with easy access to coffee, classes, and a waterfront walk before or after your visit.</p>
          <div className="mt-6 overflow-hidden rounded-[24px] border border-basalt/10 bg-foam p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-seaglass">Map snapshot</p>
            <p className="mt-3 text-base leading-7 text-basalt/75">Find us along Bow Street in central Raglan, with the harbour and local shops only a short stroll away. Parking is limited on the street, so we recommend arriving a little early for workshop bookings.</p>
            <div className="mt-5 rounded-[20px] border border-basalt/10 bg-white px-5 py-4 text-sm leading-7 text-basalt/70 shadow-soft">
              Open in your preferred maps app: 18 Bow Street, Raglan 3225, New Zealand.
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-[28px] bg-sand p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">Hours</p>
            <h2 className="mt-3 font-heading text-4xl text-basalt">Come when the light is good.</h2>
            <ul className="mt-5 space-y-3 text-lg leading-8 text-basalt/80">
              <li>Pottery Studio Hours: Wed–Sun, 10am–4pm</li>
              <li>Café Hours: Daily, 7:30am–2:30pm</li>
              <li>Parking: limited street parking, short walk to waterfront</li>
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["What to expect", "Warm welcomes, calm class pacing, and café service woven naturally into the visit."],
              ["Before you arrive", "Wear comfortable clothes for workshops and allow time to find a nearby street park."],
              ["Stay a while", "Many guests pair a morning coffee with a class or browse the gallery shelves before heading to the water."],
              ["Group visits", "Private workshops and small gatherings can be arranged with advance notice."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[24px] bg-white p-6 shadow-soft">
                <h3 className="font-heading text-3xl text-basalt">{title}</h3>
                <p className="mt-3 text-base leading-7 text-basalt/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionIntro
        eyebrow="The wider neighbourhood"
        title="Studio calm inside, Raglan atmosphere just outside the door."
        body="Browse the shelves, settle in at the counter, then take the short walk to the waterfront for a full sense of the place that shapes the studio mood."
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <img src={visitImages.seating} alt="Café seating area with warm light and relaxed atmosphere" className="h-[420px] w-full rounded-[28px] object-cover shadow-lift" />
        <img src={visitImages.mood} alt="Raglan coastal mood with sea light and shoreline atmosphere" className="h-[420px] w-full rounded-[28px] object-cover shadow-lift" />
      </section>
    </SharedPageFrame>
  );
}
