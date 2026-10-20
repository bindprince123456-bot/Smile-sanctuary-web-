import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import whitening from "@/assets/whitening.jpg";
import aligners from "@/assets/aligners.jpg";
import implant from "@/assets/implant.jpg";
import pediatric from "@/assets/pediatric.jpg";
import clinic from "@/assets/clinic.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Dentist Clinic" },
      { name: "description", content: "Dental health, whitening, aligners and implant guides from Dentist Clinic." },
      { property: "og:title", content: "Dentist Clinic Blog" },
      { property: "og:description", content: "Dental health guides and tips." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { img: whitening, tag: "Whitening", date: "Jul 2, 2026", title: "In-chair vs. take-home whitening: which is right for you?", excerpt: "A dentist-written guide to the pros, cons and realistic results of the two most popular whitening options in 2026." },
  { img: aligners, tag: "Orthodontics", date: "Jun 24, 2026", title: "5 signs invisible aligners are the right choice for adults", excerpt: "Adult orthodontics has quietly overtaken teen treatment. Here's how to know if aligners will work for your case." },
  { img: implant, tag: "Implants", date: "Jun 10, 2026", title: "How long do dental implants really last?", excerpt: "With modern surgical planning, most implants outlast the patient. We explain the numbers behind the promises." },
  { img: pediatric, tag: "Pediatrics", date: "May 30, 2026", title: "First dental visit: a parent's calm, confident guide", excerpt: "Everything you need to know to make your child's first dental visit an adventure rather than an ordeal." },
  { img: clinic, tag: "Wellness", date: "May 12, 2026", title: "The link between oral health and heart disease", excerpt: "New research is making the connection between gum health and cardiovascular risk clearer than ever." },
  { img: hero, tag: "Cosmetic", date: "Apr 28, 2026", title: "Digital smile design, explained in plain English", excerpt: "See how modern software lets you preview your future smile before we lift a single instrument." },
];

function BlogPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold text-ink">Dental health, plainly explained.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Bite-sized reads from our clinicians on whitening, orthodontics, implants and everyday oral care.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow="From the clinic" title="Latest articles" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative h-52 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">{p.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> {p.date}</div>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">Read article <ArrowRight className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}