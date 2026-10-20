import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Dentist Clinic" },
      { name: "description", content: "Answers to common questions about visits, pricing, insurance, treatments and emergencies at Dentist Clinic." },
      { property: "og:title", content: "FAQ — Dentist Clinic" },
      { property: "og:description", content: "Common questions answered." },
    ],
  }),
  component: FAQPage,
});

const groups = [
  {
    title: "Appointments",
    faqs: [
      { q: "How soon can I be seen?", a: "New patients typically book within 48 hours. We also hold same-day slots every single day for emergencies — call or WhatsApp us and we'll usually see you within two hours." },
      { q: "Do you offer evening or weekend hours?", a: "Yes. We are open Monday to Saturday, 9 AM to 8 PM, with evening slots available every weekday and full Saturday availability." },
      { q: "Can I book online?", a: "Absolutely — our contact form is monitored by a real human who will confirm your slot within an hour, usually much sooner." },
    ],
  },
  {
    title: "Pricing & insurance",
    faqs: [
      { q: "Do you accept my insurance?", a: "We accept over 20 providers including Aetna, Cigna, Delta Dental, MetLife, United Healthcare and BlueCross. Send us your card and we'll verify benefits within an hour." },
      { q: "Do you offer payment plans?", a: "Yes — interest-free plans over 3, 6 or 12 months, plus a $29/month in-house membership that covers two cleanings a year and 20% off any treatment." },
      { q: "How much does a cleaning cost?", a: "A standard cleaning and exam is $149 for uninsured patients, and typically fully covered by insurance. Deep cleanings and specialist treatments are quoted upfront in writing." },
    ],
  },
  {
    title: "Treatments",
    faqs: [
      { q: "Is treatment painful?", a: "Almost never. We use gentle numbing, laser dentistry and optional nitrous or IV sedation. Most patients say they felt nothing at all." },
      { q: "How long do implants take?", a: "From consultation to final crown, typically 3–5 months for single implants. Full-arch cases can leave the clinic with a same-day fixed smile." },
      { q: "Do aligners really work as well as braces?", a: "For the vast majority of cases, yes. We are certified Invisalign Diamond providers and hand-pick the right tool for each patient." },
    ],
  },
  {
    title: "Emergencies",
    faqs: [
      { q: "What counts as a dental emergency?", a: "Severe pain, swelling, chipped or knocked-out teeth, lost fillings or crowns, and any dental injury. When in doubt, call us — advice is always free." },
      { q: "What should I do if I knock out a tooth?", a: "Handle the tooth by the crown, rinse gently, and place it back in the socket if possible. If not, keep it in milk and call us immediately — every minute counts." },
    ],
  },
];

function FAQPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold text-ink">Everything you might want to ask.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Straight answers to the questions we get every day. Still curious? WhatsApp or call us — no question is too small.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 md:px-6">
        {groups.map((g) => (
          <div key={g.title} className="mb-10">
            <SectionHeader eyebrow="FAQs" title={g.title} align="left" />
            <div className="grid gap-3">
              {g.faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-ink">
                    {f.q}
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft text-brand transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}