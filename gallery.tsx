import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import before1 from "@/assets/before1.jpg";
import after1 from "@/assets/after1.jpg";
import before2 from "@/assets/before2.jpg";
import after2 from "@/assets/after2.jpg";
import clinic from "@/assets/clinic.jpg";
import whitening from "@/assets/whitening.jpg";
import pediatric from "@/assets/pediatric.jpg";
import implant from "@/assets/implant.jpg";
import aligners from "@/assets/aligners.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Smile Gallery — Dentist Clinic" },
      { name: "description", content: "See real before-and-after results from Dentist Clinic — whitening, aligners, veneers and implants." },
      { property: "og:title", content: "Smile Gallery — Dentist Clinic" },
      { property: "og:description", content: "Real before-and-after dental transformations." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const clinicImgs = [clinic, whitening, pediatric, implant, aligners, hero];
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold text-ink">Smile transformations, side by side.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Drag the slider on any image below to reveal the difference. Every case is
            planned digitally so you can preview your result before we begin.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow="Before & after" title="Real patients, real results" />
        <div className="grid gap-8 lg:grid-cols-2">
          <BeforeAfter before={before1} after={after1} label="In-chair whitening · 90 minutes" />
          <BeforeAfter before={before2} after={after2} label="Clear aligners · 9 months" />
          <BeforeAfter before={before1} after={after1} label="Take-home whitening · 2 weeks" />
          <BeforeAfter before={before2} after={after2} label="Porcelain veneers · 3 visits" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow="Inside the clinic" title="A calming, modern space" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {clinicImgs.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Clinic detail"
              loading="lazy"
              className={`w-full rounded-2xl object-cover shadow-soft ${i % 5 === 0 ? "row-span-2 h-full" : "h-56"}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}