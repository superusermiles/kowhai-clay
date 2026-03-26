import type { Metadata } from "next";
import {
  ContactForm,
  FaqAccordion,
  SectionIntro,
  SharedPageFrame,
  contactImages,
} from "../../components";
import { site } from "../../site-content";

const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about workshop bookings, open studio memberships, private events, and café visits.",
  alternates: {
    canonical: "https://kowhai-clay.vercel.app/contact/",
  },
  openGraph: {
    title: "Contact | Kōwhai & Clay",
    description: "Get in touch about workshop bookings, open studio memberships, private events, and café visits.",
    url: "https://kowhai-clay.vercel.app/contact/",
    images: [
      {
        url: contactImages.interior,
        width: 900,
        height: 1100,
        alt: "Warm studio interior with handmade ceramics and café atmosphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Kōwhai & Clay",
    description: "Get in touch about workshop bookings, open studio memberships, private events, and café visits.",
    images: [contactImages.interior],
  },
};

export default function ContactPage() {
  return (
    <SharedPageFrame>
      <section className="grid gap-8 rounded-[32px] bg-sand p-8 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <div>
          <SectionIntro
            eyebrow="Contact"
            title="Plan a workshop, ask about memberships, or get in touch."
            body="We are happy to help with pottery bookings, private sessions, open studio access, and practical questions before you visit."
          />
          <div className="mt-8 rounded-[24px] bg-white p-6 shadow-soft">
            <ul className="space-y-4 text-base leading-7 text-basalt/80">
              <li><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><strong>Phone:</strong> <a href={phoneHref}>{site.phone}</a></li>
              <li><strong>Instagram:</strong> <a href="https://instagram.com/kowhaiandclay" target="_blank" rel="noreferrer">{site.instagram}</a></li>
              <li><strong>Address:</strong> {site.address}</li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </section>

      <section className="space-y-8">
        <SectionIntro
          eyebrow="FAQ"
          title="Common questions before you arrive."
          body="A few useful answers about bookings, timings, and how the studio and café work together."
        />
        <FaqAccordion
          items={[
            {
              question: "Can I book a private pottery group?",
              answer: "Yes. We host private sessions for birthdays, team gatherings, and special occasions. Send through your preferred group size and dates.",
            },
            {
              question: "Do I need to book the café?",
              answer: "Walk-ins are welcome for most café visits. Larger groups should get in touch ahead of time so we can make space.",
            },
            {
              question: "How do open studio enquiries work?",
              answer: "Tell us about your previous clay experience, your preferred schedule, and what kind of access you need. We will recommend the best pass from there.",
            },
          ]}
        />
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <img src={contactImages.interior} alt="Warm studio interior with handmade ceramics and café atmosphere" className="h-[360px] w-full rounded-[28px] object-cover shadow-lift" />
        <img src={contactImages.detail} alt="Hands shaping clay detail during a pottery workshop" className="h-[360px] w-full rounded-[28px] object-cover shadow-lift" />
        <img src={contactImages.counter} alt="Café counter scene with coffee service and ceramics" className="h-[360px] w-full rounded-[28px] object-cover shadow-lift" />
      </section>
    </SharedPageFrame>
  );
}
