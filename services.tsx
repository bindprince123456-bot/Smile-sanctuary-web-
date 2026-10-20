import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Baby, HeartPulse, Shield, Smile, Sparkles, Stethoscope, Zap } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import whitening from "@/assets/whitening.jpg";
import aligners from "@/assets/aligners.jpg";
import implant from "@/assets/implant.jpg";
import pediatric from "@/assets/pediatric.jpg";
import clinic from "@/assets/clinic.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dentist Clinic" },
      { name: "description", content: "Complete dentistry including cosmetic, orthodontics, implants, pediatric and emergency care." },
      { property: "og:title", content: "Services at Dentist Clinic" },
      { property: "og:description", content: "Complete dentistry — cosmetic, orthodontics, implants and more." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Smile, title: "Cosmetic Dentistry", img: whitening, desc: "Digitally-designed smile makeovers using porcelain veneers, composite bonding and gum reshaping. We plan every case in 3D so you preview the exact result before we touch a tooth. Includes free digital smile simulation, temporary preview veneers and a 5-year workmanship guarantee.", features: ["Digital smile design", "Porcelain veneers", "Composite bonding", "Gum contouring"] },
  { icon: Sparkles, title: "Teeth Whitening", img: whitening, desc: "Enamel-safe, in-chair Philips Zoom whitening that lifts stains up to eight shades in a single 90-minute visit — with zero sensitivity for most patients. Take-home top-up kits included, plus a lifetime discount on refills for members.", features: ["In-chair Zoom whitening", "Custom take-home trays", "Sensitivity-free formula", "Lifetime top-ups"] },
  { icon: Shield, title: "Invisible Aligners", img: aligners, desc: "Certified Invisalign Diamond provider with AI-assisted treatment planning, virtual weekly check-ins and 3D-printed refinements — most cases finish in 6–9 months. Complimentary retainers for the first year and a straight-teeth-for-life monitoring plan.", features: ["Invisalign Diamond provider", "AI treatment planning", "Virtual check-ins", "Lifetime monitoring"] },
  { icon: Stethoscope, title: "Dental Implants", img: implant, desc: "Guided titanium and zirconia implant surgery with immediate temporary crowns and same-day smile options for full-arch cases. Every implant is planned on a 3D cone-beam scan for pinpoint accuracy and backed by a 10-year guarantee.", features: ["Guided 3D surgery", "Immediate temporaries", "Full-arch same day", "10-year guarantee"] },
  { icon: Baby, title: "Pediatric Dentistry", img: pediatric, desc: "Kid-first rooms with iPad ceilings, colouring corners and gentle 'Tell-Show-Do' technique. From first-tooth checks and sealants to orthodontic screening from age seven, our pediatric team makes dentistry an adventure your kids ask for.", features: ["First-visit programme", "Sealants & fluoride", "Ortho screening", "Sedation options"] },
  { icon: HeartPulse, title: "Emergency Dentistry", img: clinic, desc: "Same-day appointments for chipped teeth, abscesses, lost fillings, sports injuries and toothaches. We hold slots every single day — including evenings and Saturdays — and can usually see you within two hours of your call.", features: ["Same-day slots daily", "Evening & Saturday care", "Sports injury protocol", "Pain-relief-first"] },
  { icon: Zap, title: "Root Canal Therapy", img: clinic, desc: "Advanced rotary and laser-assisted endodontics that save your natural tooth in a single, comfortable visit. Microscope-guided precision, targeted anaesthesia and digital sensors mean the modern root canal genuinely feels like a routine filling.", features: ["Single-visit therapy", "Microscope guided", "Laser sterilization", "Comfortable anaesthesia"] },
  { icon: Shield, title: "Gum & Periodontal Care", img: clinic, desc: "Deep cleanings, laser periodontal therapy and guided tissue regeneration to reverse gum disease and rebuild lost bone. Includes a personalized at-home plan and complimentary quarterly maintenance for the first year.", features: ["Laser therapy", "Deep cleaning", "Tissue regeneration", "Maintenance included"] },
];

function ServicesPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:py-24">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Our services</span>
          <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl font-semibold text-ink">Complete dentistry, thoughtfully delivered.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            From routine hygiene to full-mouth reconstruction, every treatment is
            planned digitally, delivered by specialists and finished with the calm
            bedside manner our patients rave about.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-16">
          {services.map((s, i) => (
            <div key={s.title} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-ink">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-ink">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-soft">
                  Book this treatment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}