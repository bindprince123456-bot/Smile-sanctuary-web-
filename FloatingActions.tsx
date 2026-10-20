import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_LINK } from "./constants";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="animate-pulse-ring inline-flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.20_145)] text-white shadow-elegant transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call now"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-elegant transition hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}