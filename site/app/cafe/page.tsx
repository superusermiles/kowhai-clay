import type { Metadata } from "next";
import {
  ImageTextSplit,
  PageHero,
  SectionIntro,
  SharedPageFrame,
  cafeImages,
  site,
} from "../../components";

export const metadata: Metadata = {
  title: "Café",
  description: "Seasonal café menu, handmade tableware, and slow mornings in Raglan.",
  alternates: {
    canonical: "https://kowhai-clay.vercel.app/cafe/",
  },
  openGraph: {
    title: "Café | Kōwhai & Clay",
    description: "Seasonal café menu, handmade tableware, and slow mornings in Raglan.",
    url: "https://kowhai-clay.vercel.app/cafe/",
    images: [
      {
        url: cafeImages.hero,
        width: 1200,
        height: 900,
        alt: "Warm café counter scene with baristas and handmade ceramics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café | Kōwhai & Clay",
    description: "Seasonal café menu, handmade tableware, and slow mornings in Raglan.",
    images: [cafeImages.hero],
  },
};

export default function CafePage() {
  return (
    <SharedPageFrame>
      <PageHero
        eyebrow="Café"
        title="Seasonal food, espresso, and handmade vessels at the counter."
        text="The café extends the studio mood into a daily ritual of local coffee, warm bakes, thoughtful brunch plates, and ceramics made to be used."
        image={cafeImages.hero}
        alt="Warm café counter scene with baristas and handmade ceramics"
      />

      <SectionIntro
        eyebrow="Seasonal menu"
        title="A magazine-style café story with room to slow down."
        body="We keep the menu concise and generous: cabinet baking, coffee with real care, and plates that feel nourishing after a studio session or a waterfront walk."
      />

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">Menu highlights</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-heading text-3xl text-basalt">Coffee</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-basalt/75">
                <li>Flat White — NZ$5.50</li>
                <li>Batch Brew — NZ$5.00</li>
                <li>Seasonal filter special — NZ$6.50</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-3xl text-basalt">Kitchen</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-basalt/75">
                <li>Lemon Thyme Scone — NZ$7.50</li>
                <li>Roasted Beet Toast — NZ$18</li>
                <li>Seasonal Tartine — NZ$19</li>
              </ul>
            </div>
          </div>
        </div>
        <img src={cafeImages.coffee} alt="Coffee detail being poured into a handmade mug" className="h-[420px] w-full rounded-[28px] object-cover shadow-lift" />
      </section>

      <ImageTextSplit
        title="Cabinet food and plated dishes that feel warm, bright, and local."
        body="Expect flaky bakes, seasonal produce, and simple plates designed to sit naturally with ceramic tableware. The food is grounded, generous, and made for slow catchups."
        image={cafeImages.food}
        alt="Seasonal plated café dish served with local ingredients"
      />

      <ImageTextSplit
        title="Every table setting continues the pottery story."
        body="Cups, bowls, and plates are part of the same handmade language as the workshop shelves. The tableware adds quiet variation and a sense of touch to every meal."
        image={cafeImages.tableware}
        alt="Handmade ceramic tableware arranged on a café table"
        reverse
      />

      <section className="grid gap-6 rounded-[28px] bg-sand p-8 shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">Plan a visit</p>
          <h2 className="mt-3 font-heading text-4xl text-basalt">Open {site.cafeHours}. Dietary options available daily.</h2>
          <p className="mt-4 text-lg leading-8 text-basalt/80">Let us know about dietary needs at the counter. The café is an easy stop before or after workshops, with seating that catches the morning light.</p>
        </div>
        <a href="/visit/" className="inline-flex rounded-full bg-basalt px-6 py-3 text-sm font-semibold text-foam">Visit the café</a>
      </section>
    </SharedPageFrame>
  );
}
