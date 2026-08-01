import Link from "next/link";
import { MessageCircle, PackageCheck, Phone } from "lucide-react";
import type { CSSProperties } from "react";
import { normalizePhoneHref, publicEnv } from "@/lib/env";

function normalizeWhatsAppHref(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

export default function MobileActionBar() {
  const phoneHref = publicEnv.companyPhone
    ? normalizePhoneHref(publicEnv.companyPhone)
    : "";
  const whatsappHref = publicEnv.whatsappPhone
    ? normalizeWhatsAppHref(publicEnv.whatsappPhone)
    : "";

  const actionCount = [phoneHref, whatsappHref, "request"].filter(Boolean).length;
  const gridStyle = {
    "--mobile-action-count": actionCount,
  } as CSSProperties;

  return (
    <nav
      className="mobile-action-bar"
      aria-label="Quick contact actions"
      style={gridStyle}
    >
      {phoneHref && (
        <a
          href={phoneHref}
          className="mobile-action-button"
          aria-label="Call MedX Healthcare Solutions"
        >
          <Phone size={17} aria-hidden="true" />
          <span>Call</span>
        </a>
      )}

      {whatsappHref && (
        <a
          href={whatsappHref}
          className="mobile-action-button mobile-action-button-primary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact MedX Healthcare Solutions on WhatsApp"
        >
          <MessageCircle size={17} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      )}

      <Link
        href="/contact"
        className="mobile-action-button"
        aria-label="Open MedX request form"
      >
        <PackageCheck size={17} aria-hidden="true" />
        <span>Request</span>
      </Link>
    </nav>
  );
}
