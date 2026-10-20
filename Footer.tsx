import { Link } from "@tanstack/react-router";
import { MapPin, Clock, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, PHONE, PHONE_TEL, EMAIL, ADDRESS, HOURS } from "./constants";
import { ContactForm } from "./ContactForm";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-brand-soft/60 to-brand-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <Logo size={36} />
            <span className="font-display text-xl font-semibold text-ink">{BRAND}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Gentle, modern dentistry for every smile. Two decades of trusted care,
            world-class technology, and treatments tailored to you.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((I, i) => (
              <a key={i} href="#" aria-label="Social" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card text-brand shadow-soft transition hover:-translate-y-0.5">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/team", "Our Team"],
              ["/gallery", "Smile Gallery"],
              ["/testimonials", "Reviews"],
              ["/blog", "Blog"],
              ["/faq", "FAQs"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground transition hover:text-brand">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">Visit Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand" /> {ADDRESS}</li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 text-brand" /> {HOURS}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-brand" /> <a href={`tel:${PHONE_TEL}`} className="hover:text-brand">{PHONE}</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-brand" /> <a href={`mailto:${EMAIL}`} className="hover:text-brand">{EMAIL}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">Book Instantly</h4>
          <p className="mt-4 mb-3 text-sm text-muted-foreground">
            Send us a message and our team will confirm your appointment within an hour.
          </p>
          <ContactForm compact />
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <p>Crafted with care · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}