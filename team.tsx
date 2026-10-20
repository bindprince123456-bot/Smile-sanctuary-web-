import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import doc1 from "@/assets/doc1.jpg";
import doc2 from "@/assets/doc2.jpg";
import doc3 from "@/assets/doc3.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Dentist Clinic" },
      { name: "description", content: "Meet the board-certified dentists and specialists at Dentist Clinic." },
      { property: "og:title", content: "Our Team — Dentist Clinic" },
      { property: "og:description", content: "Board-certified specialists at Dentist Clinic." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { img: doc1, name: "Dr. Amelia Carter", role: "Founder · Cosmetic Dentistry", bio: "Board-certified cosmetic dentist with 22 years of experience and over 4,000 smile makeovers completed. NYU Dental graduate, published in the Journal of Aesthetic Dentistry, and a certified Invisalign Diamond provider." },
  { img: doc2, name: "Dr. Marcus Reid", role: "Implantologist · Prosthodontics", bio: "Prosthodontist specializing in full-arch dental implants and complex reconstructions. Fellow of the American Academy of Implant Dentistry with a decade of experience placing over 3,000 implants." },
  { img: doc3, name: "Dr. Hana Suzuki", role: "Orthodontist · Aligner Specialist", bio: "Board-certified orthodontist trained at UCLA and Kyoto University. Focuses on adult orthodontics, invisible aligners and airway-friendly treatment planning for kids and teens." },
  { img: doc1, name: "Dr. Priya Menon", role: "Endodontist", bio: "Microscope-trained endodontist saving teeth other clinics said couldn't be saved. Specialist in laser-assisted single-visit root canal therapy and dental trauma cases." },
  { img: doc2, name: "Dr. Owen Blake", role: "Pediatric Dentist", bio: "Pediatric specialist trained at Boston Children's. Passionate about making dentistry an adventure — sedation certified, sensory-friendly and endlessly patient." },
  { img: doc3, name: "Dr. Sofia Alvarez", role: "Periodontist", bio: "Periodontist and gum-disease specialist trained in laser therapy and guided tissue regeneration. Advocate of minimally-invasive periodontal care." },
];

function TeamPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold text-ink">Meet the clinicians behind your smile.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Board-certified, endlessly curious, and genuinely warm — every member of
            our team is chosen for both their clinical skill and their kindness.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow="Your team" title="Twelve specialists under one roof" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((t, i) => (
            <article key={i} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative h-72 overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink">{t.name}</h3>
                <p className="text-sm text-brand">{t.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}