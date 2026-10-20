import { useState } from "react";
import { Send, Check } from "lucide-react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 4000);
    }, 800);
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}
    >
      <input
        required
        name="name"
        placeholder="Full name"
        className="col-span-1 rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email address"
        className="col-span-1 rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      <input
        name="phone"
        placeholder="Phone number"
        className={`${compact ? "" : "sm:col-span-2"} rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20`}
      />
      <select
        name="service"
        defaultValue=""
        className={`${compact ? "" : "sm:col-span-2"} rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20`}
      >
        <option value="" disabled>Choose a service</option>
        <option>General Check-up</option>
        <option>Teeth Whitening</option>
        <option>Invisible Aligners</option>
        <option>Dental Implants</option>
        <option>Root Canal</option>
        <option>Pediatric Dentistry</option>
        <option>Emergency Care</option>
      </select>
      <textarea
        name="message"
        rows={compact ? 3 : 4}
        placeholder="Tell us how we can help…"
        className={`${compact ? "" : "sm:col-span-2"} rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20`}
      />
      <button
        type="submit"
        disabled={submitting}
        className={`${compact ? "" : "sm:col-span-2"} inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition hover:brightness-110 disabled:opacity-70`}
      >
        {sent ? (
          <>
            <Check className="h-4 w-4" /> Message sent — we'll be in touch!
          </>
        ) : submitting ? (
          "Sending…"
        ) : (
          <>
            <Send className="h-4 w-4" /> Request Appointment
          </>
        )}
      </button>
    </form>
  );
}