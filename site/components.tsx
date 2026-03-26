"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  aboutImages,
  cafeImages,
  contactImages,
  galleryImages,
  homeImages,
  openStudio,
  site,
  visitImages,
  workshops,
} from "./site-content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/workshops/", label: "Workshops" },
  { href: "/open-studio/", label: "Open Studio" },
  { href: "/cafe/", label: "Café" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/visit/", label: "Visit" },
  { href: "/contact/", label: "Contact" },
];

export function Logo({ reversed = false, mark = false }: { reversed?: boolean; mark?: boolean }) {
  const text = reversed ? "#F8F4EE" : "#2F2926";
  const tag = reversed ? "#F8F4EE" : "#7FA7A1";

  if (mark) {
    return (
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={site.name}>
        <path d="M32 14C24 14 19 19 19 27C19 31.5 20.8 35.2 23.8 38.4C26.1 41 27 43.4 27 47H37C37 43.4 37.9 41 40.2 38.4C43.2 35.2 45 31.5 45 27C45 19 40 14 32 14Z" fill="#D8A93A" />
        <path d="M21 27C21 20.9 25.9 16 32 16C38.1 16 43 20.9 43 27" stroke={text} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={site.name}>
      <g transform="translate(0 4)">
        <path d="M20 4C14 4 10 8 10 14C10 17.5 11.4 20.5 13.5 22.8C15.8 25.4 17 28.2 17 31.5V34H23V31.5C23 28.2 24.2 25.4 26.5 22.8C28.6 20.5 30 17.5 30 14C30 8 26 4 20 4Z" fill="#9B6C53" />
        <path d="M12 14C12 9.6 15.6 6 20 6C24.4 6 28 9.6 28 14" stroke="#D8A93A" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 36H29" stroke={text} strokeWidth="2.2" strokeLinecap="round" />
      </g>
      <text x="42" y="24" fill={text} fontFamily="Cormorant Garamond, serif" fontSize="24" fontWeight="600">Kōwhai &amp; Clay</text>
      <text x="43" y="38" fill={tag} fontFamily="Manrope, sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.18em">SHAPED BY THE SEA</text>
    </svg>
  );
}

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const currentPath = pathname ?? "/";
  const isTransparent = transparent && !scrolled && currentPath === "/";
  const shellClass = isTransparent
    ? "bg-transparent text-basalt"
    : "border-b border-basalt/10 bg-foam/92 text-basalt shadow-soft backdrop-blur-md";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${shellClass}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" aria-label="Kōwhai & Clay home" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = currentPath === link.href || (link.href !== "/" && currentPath.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-semibold tracking-[0.12em] uppercase ${active ? "text-seaglass" : "text-basalt"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Link href="/workshops/" className="inline-flex rounded-full bg-kowhai px-5 py-3 text-sm font-semibold text-basalt transition hover:-translate-y-0.5 hover:shadow-soft">
            Book a Workshop
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-basalt/15 bg-foam lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-basalt" />
            <span className="block h-0.5 w-5 bg-basalt" />
            <span className="block h-0.5 w-5 bg-basalt" />
          </span>
        </button>
      </div>
      {open && (
        <div className="border-t border-basalt/10 bg-foam px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4 text-lg font-semibold text-basalt">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/workshops/" className="mt-2 inline-flex w-fit rounded-full bg-kowhai px-5 py-3 text-sm font-semibold text-basalt">
              Book a Workshop
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <footer className="bg-basalt px-5 py-16 text-foam md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-4 md:text-left">
        <div className="space-y-4">
          <Logo reversed />
          <p className="max-w-xs text-sm leading-7 text-foam/75">Warm pottery workshops, open studio access, and a coastal café journal from the heart of Raglan.</p>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-2xl">Explore</h3>
          <ul className="space-y-3 text-sm text-foam/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-2xl">Visit</h3>
          <ul className="space-y-3 text-sm text-foam/80">
            <li>{site.address}</li>
            <li>Studio: {site.studioHours}</li>
            <li>Café: {site.cafeHours}</li>
            <li>Limited street parking, short walk to the waterfront.</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-2xl">Connect</h3>
          <ul className="space-y-3 text-sm text-foam/80">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={phoneHref}>{site.phone}</a></li>
            <li><a href="https://instagram.com/kowhaiandclay" target="_blank" rel="noreferrer">Instagram {site.instagram}</a></li>
            <li>Book classes, ask about memberships, or plan a slow morning by the sea.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function SectionIntro({ eyebrow, title, body, align = "left" }: { eyebrow: string; title: string; body: string; align?: "left" | "center" }) {
  return (
    <div className={`space-y-4 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">{eyebrow}</p>
      <h2 className="font-heading text-4xl leading-tight text-basalt md:text-5xl">{title}</h2>
      <p className="text-lg leading-8 text-basalt/80">{body}</p>
    </div>
  );
}

export function FeatureCardGrid({ items }: { items: { title: string; text: string; href: string; icon: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <Link key={item.title} href={item.href} className="group rounded-[24px] border border-basalt/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand text-2xl">{item.icon}</div>
          <h3 className="font-heading text-3xl text-basalt">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-basalt/75">{item.text}</p>
          <span className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-seaglass">Explore</span>
        </Link>
      ))}
    </div>
  );
}

export function ImageTextSplit({ title, body, image, alt, reverse = false, cta }: { title: string; body: string; image: string; alt: string; reverse?: boolean; cta?: { href: string; label: string } }) {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "order-2 lg:order-1" : ""}>
        <img src={image} alt={alt} className="h-[420px] w-full rounded-[28px] object-cover shadow-lift transition duration-300 hover:scale-[1.02]" />
      </div>
      <div className={reverse ? "order-1 lg:order-2" : ""}>
        <h2 className="font-heading text-4xl leading-tight text-basalt md:text-5xl">{title}</h2>
        <p className="mt-5 text-lg leading-8 text-basalt/80">{body}</p>
        {cta && (
          <Link href={cta.href} className="mt-8 inline-flex rounded-full border border-basalt/15 px-5 py-3 text-sm font-semibold text-basalt transition hover:border-seaglass hover:text-seaglass">
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}

export function PricingCards({ items }: { items: { title: string; price: string; duration: string; description: string; features: string[]; highlighted?: boolean }[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className={`rounded-[24px] border p-8 shadow-soft ${item.highlighted ? "border-kowhai bg-kowhai/20" : "border-basalt/10 bg-white"}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">{item.duration}</p>
          <h3 className="mt-3 font-heading text-3xl text-basalt">{item.title}</h3>
          <p className="mt-2 text-3xl font-semibold text-basalt">{item.price}</p>
          <p className="mt-4 text-base leading-7 text-basalt/75">{item.description}</p>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-basalt/75">
            {item.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
          <Link href="/contact/" className="mt-8 inline-flex rounded-full bg-basalt px-5 py-3 text-sm font-semibold text-foam transition hover:-translate-y-0.5">
            Enquire now
          </Link>
        </div>
      ))}
    </div>
  );
}

export function TimelineSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {steps.map((step, index) => (
        <div key={step.title} className="rounded-[24px] border border-basalt/10 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-seaglass">0{index + 1}</p>
          <h3 className="mt-3 font-heading text-3xl text-basalt">{step.title}</h3>
          <p className="mt-3 text-base leading-7 text-basalt/75">{step.text}</p>
        </div>
      ))}
    </div>
  );
}

export function GalleryMasonry() {
  return (
    <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
      {galleryImages.map((image) => (
        <figure key={image.src} className="mb-6 break-inside-avoid overflow-hidden rounded-[28px] bg-white shadow-soft">
          <img src={image.src} alt={image.alt} className="w-full object-cover transition duration-300 hover:scale-[1.02]" />
          <figcaption className="px-4 py-4 text-sm leading-6 text-basalt/70">{image.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-[24px] border border-basalt/10 bg-white shadow-soft">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-heading text-2xl text-basalt">{item.question}</span>
              <span className="text-2xl text-seaglass">{open ? "−" : "+"}</span>
            </button>
            <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden px-6 pb-5 text-base leading-7 text-basalt/75">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-[24px] bg-white p-7 shadow-soft">
      <input className="rounded-[18px] border border-basalt/10 bg-foam px-4 py-3 text-basalt outline-none" placeholder="Name" aria-label="Name" />
      <input className="rounded-[18px] border border-basalt/10 bg-foam px-4 py-3 text-basalt outline-none" placeholder="Email" type="email" aria-label="Email" />
      <input className="rounded-[18px] border border-basalt/10 bg-foam px-4 py-3 text-basalt outline-none" placeholder="Phone" aria-label="Phone" />
      <select className="rounded-[18px] border border-basalt/10 bg-foam px-4 py-3 text-basalt outline-none" defaultValue="" aria-label="Enquiry type">
        <option value="" disabled>Enquiry type</option>
        <option>Workshop booking</option>
        <option>Open studio membership</option>
        <option>Café visit</option>
        <option>Private event</option>
        <option>General question</option>
      </select>
      <textarea className="min-h-[150px] rounded-[18px] border border-basalt/10 bg-foam px-4 py-3 text-basalt outline-none" placeholder="Tell us what you're planning" aria-label="Message" />
      <button type="submit" className="inline-flex w-fit rounded-full bg-kowhai px-5 py-3 text-sm font-semibold text-basalt transition hover:-translate-y-0.5 hover:shadow-soft">
        Send enquiry
      </button>
      <p className="text-sm leading-6 text-basalt/60">This static form is designed for quick contact details and planning conversations.</p>
    </form>
  );
}

export function PageHero({ eyebrow, title, text, image, alt }: { eyebrow: string; title: string; text: string; image: string; alt: string }) {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-sand">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">{eyebrow}</p>
          <h1 className="mt-4 font-heading text-5xl leading-tight text-basalt md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-basalt/80">{text}</p>
        </div>
        <img src={image} alt={alt} className="h-[360px] w-full object-cover lg:h-[520px]" />
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(216,169,58,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(127,167,161,0.18),_transparent_35%)] px-5 pb-20 pt-8 md:px-8 md:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,rgba(155,108,83,0.18)_0,transparent_12%),radial-gradient(circle_at_35%_30%,rgba(155,108,83,0.14)_0,transparent_10%),radial-gradient(circle_at_70%_18%,rgba(127,167,161,0.14)_0,transparent_12%)]" />
        <div className="mx-auto max-w-6xl">
          <SiteHeader transparent />
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">Artisan Pottery Studio & Café · Raglan, Waikato</p>
              <h1 className="mt-5 font-heading text-6xl leading-none text-basalt md:text-7xl">Shaped by the sea. Made by hand.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-basalt/80">Kōwhai & Clay is a calm gathering place for wheel classes, open studio making, and slow café mornings. We bring together clay dust, black-sand light, and thoughtful hospitality in one tactile coastal address.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/workshops/" className="inline-flex rounded-full bg-kowhai px-6 py-3 text-sm font-semibold text-basalt transition hover:-translate-y-0.5 hover:shadow-soft">Book a Workshop</Link>
                <Link href="/cafe/" className="inline-flex rounded-full border border-basalt/15 px-6 py-3 text-sm font-semibold text-basalt transition hover:border-seaglass hover:text-seaglass">Visit the Café</Link>
              </div>
            </div>
            <div className="relative">
              <img src={homeImages.heroMain} alt="Large pottery vessel styled in soft natural light inside the Raglan studio" className="ml-auto h-[560px] w-full max-w-[480px] rounded-[32px] object-cover shadow-lift" />
              <img src={homeImages.heroSecondary} alt="Coffee being poured into a handmade ceramic cup" className="absolute -bottom-8 left-0 hidden h-[240px] w-[200px] rounded-[28px] object-cover shadow-lift md:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <img src={homeImages.intro} alt="Handmade ceramic mugs lined up on a timber shelf" className="h-full min-h-[420px] w-full rounded-[28px] object-cover shadow-soft" />
        <div className="space-y-8">
          <SectionIntro eyebrow="A layered coastal studio" title="A place to make, gather, and linger." body="From first-time wheel sessions to regular open studio membership, every part of the space is designed to feel welcoming and quietly refined. The café carries the same intention, serving seasonal food and espresso in handmade vessels." />
          <FeatureCardGrid items={[
            { title: "Workshops", text: "Beginner-friendly throwing, hand-building, glazing, and giftable weekend sessions.", href: "/workshops/", icon: "◌" },
            { title: "Open Studio", text: "Return to your practice with flexible passes, shelves, tools, and community guidance.", href: "/open-studio/", icon: "△" },
            { title: "Café", text: "Cabinet bakes, seasonal tartines, and coffee poured with a slow, local rhythm.", href: "/cafe/", icon: "☕" },
          ]} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <ImageTextSplit
          title="Workshops that turn curiosity into confidence."
          body="Our classes are paced for first-timers and returning makers alike, with generous guidance, small group energy, and enough room to enjoy the process. Expect wheel sessions, hand-building tables, glazing, and pieces worth taking home or gifting."
          image={homeImages.workshop}
          alt="Workshop participant shaping clay on a pottery wheel with tutor support"
          cta={{ href: "/workshops/", label: "See workshop options" }}
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <ImageTextSplit
          title="A café shaped by seasonal food and handmade tableware."
          body="The counter is stocked with cabinet favourites, thoughtful brunch plates, and espresso worth slowing down for. Cups, plates, and serving pieces are all part of the studio story, making every visit feel local, tactile, and quietly special."
          image={homeImages.cafe}
          alt="Coffee and pastries served on handmade ceramics in the café"
          reverse
          cta={{ href: "/cafe/", label: "Preview the café" }}
        />
      </section>

      <section className="relative overflow-hidden">
        <img src={homeImages.band} alt="Full-width café atmosphere with warm light and handmade ceramics" className="h-[520px] w-full object-cover" />
        <div className="absolute inset-0 bg-basalt/35" />
        <div className="absolute inset-x-0 bottom-12 mx-auto max-w-4xl px-5 text-center text-foam md:px-8">
          <p className="font-heading text-4xl leading-tight md:text-5xl">“A studio for sea-light mornings, clay-ring afternoons, and coffee shared across the workbench.”</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-6 rounded-[28px] bg-sand p-8 shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-seaglass">Visit snapshot</p>
            <h2 className="mt-4 font-heading text-4xl text-basalt">Find us on Bow Street, a short walk from the waterfront.</h2>
            <p className="mt-4 text-lg leading-8 text-basalt/80">{site.address} · Studio {site.studioHours} · Café {site.cafeHours}</p>
          </div>
          <Link href="/visit/" className="inline-flex rounded-full bg-basalt px-6 py-3 text-sm font-semibold text-foam transition hover:-translate-y-0.5">
            Plan your visit
          </Link>
        </div>
      </section>
    </div>
  );
}

export function SharedPageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-foam text-basalt">
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-24 px-5 py-8 md:px-8 md:py-12">{children}</main>
      <SiteFooter />
    </div>
  );
}

export {
  aboutImages,
  cafeImages,
  contactImages,
  galleryImages,
  homeImages,
  openStudio,
  site,
  visitImages,
  workshops,
};
