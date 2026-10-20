import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { ADDRESS, EMAIL, HOURS, PHONE, PHONE_TEL, WHATSAPP_LINK } from "@/components/site/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dentist Clinic" },
      { name: "description", content: "Book an appointment or ask us anything — call, email, WhatsApp or fill out the form." },
      { property: "og:title", content: "Contact Dentist Clinic" },
      { property: "og:description", content: "Book an appointment or ask us anything." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold text-ink">Let's get you smiling.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Send us a message and a real human will respond within an hour. Prefer to talk? Call or WhatsApp us anytime — we're happy to help.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: Phone, t: "Call us", d: PHONE, href: `tel:${PHONE_TEL}` },
            { icon: MessageCircle, t: "WhatsApp", d: "Chat with our front desk", href: WHATSAPP_LINK },
            { icon: Mail, t: "Email", d: EMAIL, href: `mailto:${EMAIL}` },
            { icon: MapPin, t: "Visit us", d: ADDRESS },
            { icon: Clock, t: "Hours", d: HOURS },
          ].map((c) => (
            <a key={c.t} href={c.href} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand"><c.icon className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-semibold text-ink">{c.t}</div>
                <div className="text-sm text-muted-foreground">{c.d}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-ink">Request an appointment</h2>
          <p className="mt-1 text-sm text-muted-foreground">We'll confirm within an hour.</p>
          <div className="mt-5"><ContactForm /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Dentist Clinic location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01,40.74,-73.98,40.76&layer=mapnik"
            className="h-[380px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}