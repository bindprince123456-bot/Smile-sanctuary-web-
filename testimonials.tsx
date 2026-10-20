import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — Dentist Clinic" },
      { name: "description", content: "Read reviews from 2,300+ patients who trust Dentist Clinic with their smiles." },
      { property: "og:title", content: "Reviews — Dentist Clinic" },
      { property: "og:description", content: "2,300+ patient reviews." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Priya S.", role: "Implant patient · 3 years", text: "Two decades of dental anxiety, gone in one visit. The team walked me through every step, and my implant looks completely natural — even I forget which tooth it is. I recommend Dentist Clinic to everyone." },
  { name: "Marcus L.", role: "Family patient · 5 years", text: "The most modern clinic I've ever been to — same-day crown, no discomfort, and the staff remembered my daughter's birthday. Genuinely the highlight of our year in healthcare." },
  { name: "Elena R.", role: "Aligner patient", text: "Nine months of clear aligners later I have perfectly straight teeth and never once wore a bracket. The virtual weekly check-ins meant only three in-person visits the whole treatment." },
  { name: "James T.", role: "Family patient", text: "We bring all four kids here. Painless cleanings, honest recommendations, and reasonable pricing. Genuinely a joy every visit, even for the toddler who cries at every other doctor." },
  { name: "Aisha M.", role: "Whitening patient", text: "Eight shades brighter in ninety minutes and zero sensitivity afterwards. Wedding photos have never looked better — thank you to the whole team, especially Dr. Carter." },
  { name: "Daniel K.", role: "Emergency patient", text: "Chipped a front tooth on a Saturday morning playing hockey. They saw me within the hour and I left with a perfect repair. You cannot tell there was ever a chip." },
  { name: "Sarah W.", role: "Veneer patient", text: "The digital smile design meant I could see my new smile before I said yes to treatment. Two months later I have the smile I've wanted my whole life. Life-changing work." },
  { name: "Oscar B.", role: "Pediatric parent", text: "My son actually asks when we're going back to the dentist. Between the iPad ceilings, the friendly nurse and Dr. Owen's magic, they've made brushing at home effortless too." },
  { name: "Nadia F.", role: "Root canal patient", text: "I dreaded my root canal for weeks. It took 40 minutes, I felt absolutely nothing, and I was back at work by lunch. Modern dentistry is unrecognisable — in the best way." },
];

function ReviewsPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold text-ink">Loved by 2,300+ patients.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">4.9★ average across Google, Yelp, and Zocdoc. Read what our patients say about their experience at Dentist Clinic.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow="Patient stories" title="What our patients say" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft font-semibold text-brand">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}