import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, HeartPulse, Leaf, Shield, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import clinic from "@/assets/clinic.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dentist Clinic" },
      { name: "description", content: "Meet Dentist Clinic — 22 years of gentle, technology-forward dentistry serving New York families." },
      { property: "og:title", content: "About Dentist Clinic" },
      { property: "og:description", content: "22 years of gentle, technology-forward dentistry." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: HeartPulse, t: "Patients first", d: "Every decision — from lighting to language — is designed to lower anxiety and raise trust." },
    { icon: Sparkles, t: "Clinical excellence", d: "Board-certified specialists, evidence-based protocols and yearly reinvestment in the best equipment." },
    { icon: Leaf, t: "Kind by design", d: "Sustainably sourced materials, digital records, and a genuinely warm team who remember your name." },
    { icon: Shield, t: "Radical transparency", d: "Written treatment plans, upfront pricing and a promise to never recommend what you don't need." },
  ];
  return (
    <>
      <section className="relative overflow-hidden gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:py-28">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">About us</span>
          <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-semibold text-ink">
            Twenty-two years of gentle, modern dentistry.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Dentist Clinic began in 2003 with one dental chair, one dentist and one
            promise: that dental visits should feel calm, kind, and completely unhurried.
            Two decades later we are a multi-specialty clinic serving eighteen thousand patients
            — and that promise is still the compass for everything we do.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        <img src={hero} alt="Our team at work" loading="lazy" className="w-full rounded-[2rem] object-cover shadow-elegant" />
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-ink">Our story</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Dr. Amelia Carter opened the doors of Dentist Clinic in a converted brownstone
            on Smile Avenue, driven by the belief that dentistry had lost its warmth to
            fluorescent lights and hurried check-ups. She started with monthly community
            clinics, hand-written follow-ups, and a small library of children's books in the waiting room.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Over the next two decades the clinic grew — from one chair to twelve, from one
            dentist to a full multi-specialty team, from paper charts to fully digital 3D
            imaging — but the values never changed. Today, families who visited us as
            children now bring their own children. That, more than any award, is the
            measure we care about most.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              "12 in-house specialists",
              "18,000+ patients served",
              "22 years in practice",
              "4.9★ average rating",
              "$1.2M reinvested yearly",
              "20+ insurance partners",
            ].map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand" /> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-brand-soft/40 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="What we stand for" title="Four values, one philosophy" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-24 md:px-6">
        <img src={clinic} alt="Inside our clinic" loading="lazy" className="w-full rounded-[2rem] object-cover shadow-elegant" />
        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink">A calm, sensory-friendly space</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our clinic was designed with a neuroarchitect to reduce sensory overload —
            soft lighting, muted teal palette, natural wood, botanical accents and
            ceiling-mounted screens that turn every appointment into a quiet retreat. You'll
            find noise-cancelling headphones, aromatherapy, warm blankets and a hot-drink
            bar in the waiting lounge. Little touches, big difference.
          </p>
        </div>
      </section>
    </>
  );
}