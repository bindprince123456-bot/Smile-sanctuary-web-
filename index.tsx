import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, Shield, Award, Clock, Users, Smile, Stethoscope,
  HeartPulse, Baby, Star, CheckCircle2, ArrowRight, Phone, Calendar,
  Trophy, Microscope, Leaf,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import clinic from "@/assets/clinic.jpg";
import whitening from "@/assets/whitening.jpg";
import aligners from "@/assets/aligners.jpg";
import implant from "@/assets/implant.jpg";
import pediatric from "@/assets/pediatric.jpg";
import doc1 from "@/assets/doc1.jpg";
import doc2 from "@/assets/doc2.jpg";
import doc3 from "@/assets/doc3.jpg";
import before1 from "@/assets/before1.jpg";
import after1 from "@/assets/after1.jpg";
import before2 from "@/assets/before2.jpg";
import after2 from "@/assets/after2.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ContactForm } from "@/components/site/ContactForm";
import { BRAND, WHATSAPP_LINK, PHONE_TEL, PHONE } from "@/components/site/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BRAND} — Gentle, Modern Dental Care in New York` },
      { name: "description", content: "Award-winning dentistry with whitening, aligners, implants, and pediatric care. Book an appointment today at Dentist Clinic." },
      { property: "og:title", content: `${BRAND} — Gentle, Modern Dental Care` },
      { property: "og:description", content: "Award-winning dentistry with whitening, aligners, implants, and pediatric care." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Process />
      <About />
      <BeforeAfterSection />
      <Team />
      <Technology />
      <Testimonials />
      <Insurance />
      <FAQPreview />
      <CTA />
    </>
  );
}

/* 1. HERO */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-soft" />
      <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-mint/40 blur-3xl animate-float" />
      <div className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-brand/20 blur-3xl animate-float" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-14 md:px-6 lg:grid-cols-2 lg:pt-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Rated 4.9 by 2,300+ patients
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-ink">
            A brighter smile,{" "}
            <span className="bg-gradient-to-r from-brand to-[oklch(0.55_0.18_170)] bg-clip-text text-transparent">
              gentler care.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
            {BRAND} blends comforting, sensory-friendly rooms with the latest digital
            dentistry — from same-day crowns to invisible aligners and implants —
            so every visit feels calm, quick, and remarkably kind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-elegant transition hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4" /> Book Appointment
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5"
            >
              Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "22+", v: "Years of care" },
              { k: "18k", v: "Happy smiles" },
              { k: "4.9★", v: "Google rating" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur shadow-soft">
                <div className="font-display text-2xl font-semibold text-brand">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand/10 blur-2xl" />
          <img
            src={hero}
            alt="Friendly dentist and patient at Dentist Clinic"
            width={1600}
            height={1000}
            className="w-full rounded-[2rem] object-cover shadow-elegant"
          />
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-card p-4 shadow-elegant">
            <div className="rounded-full bg-brand-soft p-2 text-brand"><HeartPulse className="h-6 w-6" /></div>
            <div>
              <div className="text-sm font-semibold text-ink">Pain-free promise</div>
              <div className="text-xs text-muted-foreground">Or your visit is on us.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 2. TRUST BAR */
function TrustBar() {
  const items = ["ADA Accredited", "AAID Member", "Invisalign Diamond", "ISO 9001 Clinic", "Cigna · Delta · Aetna", "Same-Day Emergency"];
  return (
    <section className="border-y border-border bg-card/50 py-4 overflow-hidden">
      <div className="flex animate-marquee gap-12 whitespace-nowrap text-sm font-semibold text-muted-foreground">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-brand" /> {t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* 3. SERVICES */
const services = [
  { icon: Smile, title: "Cosmetic Dentistry", desc: "Veneers, bonding and smile makeovers designed digitally so you preview your result before we begin.", img: whitening },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Enamel-safe in-chair and take-home whitening that lifts stains up to 8 shades in a single visit.", img: whitening },
  { icon: Shield, title: "Invisible Aligners", desc: "Certified Invisalign & clear-aligner therapy with AI-assisted treatment planning and virtual check-ins.", img: aligners },
  { icon: Stethoscope, title: "Dental Implants", desc: "Titanium and zirconia implants with guided surgery for permanent, natural-feeling tooth replacement.", img: implant },
  { icon: Baby, title: "Pediatric Care", desc: "Kid-friendly rooms, gentle cleanings, sealants and orthodontic screenings from age three onwards.", img: pediatric },
  { icon: HeartPulse, title: "Emergency Dentistry", desc: "Same-day appointments for chipped teeth, abscesses and toothaches — including evenings and Saturdays.", img: clinic },
];

function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeader
        eyebrow="What we do"
        title="Complete dentistry, thoughtfully delivered"
        subtitle="From routine cleanings to full-mouth reconstructions, every treatment is planned with 3D imaging, executed by specialists, and finished with the calm bedside manner our patients rave about."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="relative h-44 overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 inline-flex items-center justify-center rounded-2xl bg-white/95 p-2.5 text-brand shadow-soft">
                <s.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 4. WHY US */
function WhyUs() {
  const points = [
    { icon: Award, title: "Top-rated Specialists", desc: "Board-certified dentists, prosthodontists, orthodontists and endodontists working under one roof for seamless care." },
    { icon: Microscope, title: "Digital-first Diagnostics", desc: "3D cone-beam scans, intraoral cameras and AI cavity detection give you clarity — and no unnecessary treatment." },
    { icon: Leaf, title: "Calm, Sensory-friendly Rooms", desc: "Noise-cancelling headphones, aromatherapy, warm blankets and ceiling TVs turn every visit into a quiet retreat." },
    { icon: Clock, title: "Fast, Flexible Scheduling", desc: "Evening and weekend slots, online booking, and same-day emergency care mean life never has to pause for your teeth." },
    { icon: Shield, title: "Transparent, Fair Pricing", desc: "Upfront estimates, interest-free membership plans and support with 20+ insurance providers — no surprise bills." },
    { icon: Trophy, title: "Guaranteed Results", desc: "Every restoration is backed by a 5-year workmanship guarantee, and every visit by our smile satisfaction promise." },
  ];
  return (
    <section className="bg-gradient-to-b from-brand-soft/40 to-transparent py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader eyebrow="Why choose us" title="Care you can feel from the moment you arrive"
          subtitle="We built Dentist Clinic around one idea: dentistry should be as calming as it is clinical. Here's how we deliver on that, every single day." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <div key={p.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. PROCESS */
function Process() {
  const steps = [
    { n: "01", t: "Book & Share", d: "Reserve online, by phone or WhatsApp in under 60 seconds. Upload prior X-rays if you have them." },
    { n: "02", t: "Discover", d: "A relaxed 45-minute consultation with 3D imaging, oral cancer screening and a written treatment plan." },
    { n: "03", t: "Personalize", d: "Choose the path that fits your budget, timeline and goals — with clear pricing and phased options." },
    { n: "04", t: "Transform", d: "Comfortable treatments delivered by specialists, with sedation options whenever you need them." },
    { n: "05", t: "Maintain", d: "Complimentary hygiene reminders, an annual smile review and lifetime support for anything we install." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeader eyebrow="How it works" title="Five gentle steps to your best smile"
        subtitle="No pressure, no jargon, no surprise bills — just a clear, five-step journey designed around your comfort." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <div key={s.n} className="relative rounded-3xl border border-border bg-card p-6 shadow-soft animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="font-display text-4xl font-semibold text-brand/40">{s.n}</div>
            <h3 className="mt-2 text-base font-semibold text-ink">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 6. ABOUT */
function About() {
  return (
    <section className="bg-gradient-to-b from-transparent via-brand-soft/40 to-transparent py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative animate-fade-up">
          <img src={clinic} alt="Interior of Dentist Clinic" loading="lazy" className="w-full rounded-[2rem] object-cover shadow-elegant" />
          <div className="absolute -right-6 -bottom-6 hidden md:block rounded-2xl bg-brand p-6 text-brand-foreground shadow-elegant max-w-xs">
            <div className="font-display text-3xl font-semibold">22 years</div>
            <p className="mt-1 text-sm opacity-90">Trusted by families across three generations of New Yorkers.</p>
          </div>
        </div>
        <div className="animate-fade-up">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">About Dentist Clinic</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink">A modern clinic with an old-fashioned bedside manner.</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Founded in 2003 by Dr. Amelia Carter, Dentist Clinic began as a small
            neighborhood practice with an outsized ambition — to make dental
            visits something people actually look forward to. Two decades later,
            we are a multi-specialty clinic of twelve clinicians serving over
            eighteen thousand patients, yet we still greet every guest by name
            and still finish every visit with a hand-written thank-you card.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our clinicians rotate through top teaching hospitals, publish in
            peer-reviewed journals and invest every year in the equipment that
            makes treatments faster and more comfortable. From same-day CEREC
            crowns to guided implant surgery and clear aligners, you get access
            to the most advanced dentistry in the country — delivered in a
            calm, unhurried, deeply human way.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              "12 in-house specialists",
              "Same-day emergency care",
              "Interest-free payment plans",
              "20+ insurance providers accepted",
            ].map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand" /> {f}
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition hover:brightness-110">
            Meet the clinic <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 7. BEFORE/AFTER */
function BeforeAfterSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeader eyebrow="Real results" title="Smile transformations, side by side"
        subtitle="Drag the slider to see the difference our whitening and aligner treatments made for real patients. Every case is planned digitally so you preview your result on day one." />
      <div className="grid gap-8 lg:grid-cols-2">
        <BeforeAfter before={before1} after={after1} label="In-chair whitening · 90 minutes" />
        <BeforeAfter before={before2} after={after2} label="Clear aligners · 9 months" />
      </div>
    </section>
  );
}

/* 8. TEAM */
function Team() {
  const team = [
    { img: doc1, name: "Dr. Amelia Carter", role: "Founder · Cosmetic Dentist" },
    { img: doc2, name: "Dr. Marcus Reid", role: "Implantologist · Prosthodontics" },
    { img: doc3, name: "Dr. Hana Suzuki", role: "Orthodontist · Aligner Specialist" },
  ];
  return (
    <section className="bg-gradient-to-b from-brand-soft/40 to-transparent py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader eyebrow="Your clinicians" title="A team you'll trust from the first hello"
          subtitle="Board-certified, endlessly curious, and genuinely warm — meet a few of the specialists who will be looking after your smile." />
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((t, i) => (
            <div key={t.name} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="relative h-72 overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-ink">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/team" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5">
            See the full team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 9. TECHNOLOGY */
function Technology() {
  const tech = [
    { t: "3D Cone-Beam CT", d: "Micron-level scans for guided implant placement and airway analysis." },
    { t: "CEREC Same-Day Crowns", d: "Digital impressions and milled crowns ready in a single visit." },
    { t: "AI Cavity Detection", d: "Second-opinion diagnostics that spot early decay invisible to the eye." },
    { t: "Laser Dentistry", d: "Faster, quieter treatments for gums, cavities and cold-sore relief." },
    { t: "Intraoral Scanning", d: "No more goopy impressions — just a two-minute wand scan." },
    { t: "Sedation Options", d: "Nitrous, oral and IV sedation delivered by a certified anesthesiologist." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeader eyebrow="Technology" title="The technology behind kinder dentistry"
        subtitle="We reinvest every year in equipment that makes treatments faster, quieter and more accurate. Here's what powers your visit." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tech.map((x, i) => (
          <div key={x.t} className="rounded-2xl border border-border bg-card p-5 shadow-soft animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="flex items-center gap-2 text-brand">
              <Microscope className="h-5 w-5" />
              <h3 className="text-base font-semibold text-ink">{x.t}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 10. TESTIMONIALS */
const testimonials = [
  { name: "Priya S.", role: "Patient · 3 years", text: "Two decades of dental anxiety, gone in one visit. The team walked me through every step, and my implant looks completely natural." },
  { name: "Marcus L.", role: "Patient · 5 years", text: "The most modern clinic I've ever been to — same-day crown, no discomfort, and the staff remembered my daughter's birthday." },
  { name: "Elena R.", role: "Aligner patient", text: "Nine months later I have straight teeth and never once wore a bracket. The virtual check-ins were a game changer." },
  { name: "James T.", role: "Family patient", text: "We bring all four kids here. Painless cleanings, honest recommendations, and reasonable pricing. Genuinely a joy every visit." },
  { name: "Aisha M.", role: "Whitening patient", text: "Eight shades brighter in ninety minutes and zero sensitivity. Wedding photos have never looked better — thank you!" },
  { name: "Daniel K.", role: "Emergency patient", text: "Chipped a front tooth on a Saturday morning. They saw me within the hour and I left with a perfect repair." },
];

function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-brand-soft/40 to-transparent py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader eyebrow="Loved by patients" title="4.9★ across 2,300+ reviews"
          subtitle="Real words from real people who trust us with the smiles of everyone they love." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={t.name} className="rounded-3xl border border-border bg-card p-6 shadow-soft animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft font-semibold text-brand">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 11. INSURANCE */
function Insurance() {
  const partners = ["Aetna", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana", "BlueCross BlueShield"];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="rounded-[2rem] gradient-hero p-8 md:p-14 text-brand-foreground shadow-elegant">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Insurance & flexible payment plans</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/85">
              We work with more than twenty major insurance providers and file
              every claim on your behalf. Not insured? Our in-house membership
              plan covers two cleanings, exams, x-rays and 20% off any
              treatment for just $29 per month.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand shadow-soft transition hover:scale-[1.02]">
                Check my coverage <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {partners.map((p) => (
              <div key={p} className="rounded-2xl bg-white/15 px-3 py-4 text-center text-sm font-semibold text-white backdrop-blur">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 12. FAQ PREVIEW */
function FAQPreview() {
  const faqs = [
    { q: "How soon can I be seen?", a: "New patients can typically book within 48 hours, and we hold same-day slots every day for emergencies." },
    { q: "Do you accept my insurance?", a: "We accept 20+ providers including Aetna, Cigna, Delta and BlueCross. Send us your card and we'll verify benefits within an hour." },
    { q: "Is treatment painful?", a: "Almost never. We use gentle numbing, laser dentistry and optional sedation so most patients say they felt nothing at all." },
    { q: "Do you offer payment plans?", a: "Yes — interest-free plans over 3, 6 or 12 months, plus a $29/month membership that includes two cleanings a year." },
  ];
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 md:px-6">
      <SectionHeader eyebrow="Answers" title="Frequently asked questions" />
      <div className="grid gap-4">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:shadow-elegant animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-ink">
              {f.q}
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft text-brand transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/faq" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-ink shadow-soft">
          See all FAQs <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* 13. CTA / CONTACT */
function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
      <div className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant lg:grid-cols-2">
        <div className="gradient-hero p-10 text-brand-foreground md:p-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Book a visit</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">Ready when you are.</h2>
          <p className="mt-3 leading-relaxed text-white/85">
            Send us a message and a real human will respond within an hour — usually much sooner.
            Prefer to talk? Call or WhatsApp us anytime.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/90">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> {PHONE}</div>
            <div className="flex items-center gap-2"><Users className="h-4 w-4" /> Same-day appointments available</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon–Sat · 9 AM – 8 PM</div>
          </div>
        </div>
        <div className="p-8 md:p-12">
          <h3 className="text-xl font-semibold text-ink">Request an appointment</h3>
          <p className="mt-1 text-sm text-muted-foreground">We'll confirm within an hour.</p>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}