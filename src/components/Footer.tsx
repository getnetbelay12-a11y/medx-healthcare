import Link from "next/link";
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const serviceLinks = [
  { label: "Pharmaceutical supply", href: "/services" },
  { label: "Medical devices", href: "/services" },
  { label: "Diagnostics", href: "/services" },
  { label: "Cervical screening", href: "/services" },
];

const companyLinks = [
  { label: "About MedX", href: "/about" },
  { label: "Strategy", href: "/strategy" },
  { label: "Public Health", href: "/public-health-focus" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#041426] text-white">
      <div className="container-medx py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10a66e] text-white">
                <Building2 size={24} />
              </div>

              <div>
                <p className="text-xl font-black tracking-tight">MedX</p>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300">
                  Healthcare Solutions
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              MedX supports healthcare facilities and public-health programs
              with pharmaceuticals, medical devices, diagnostics,
              cervical-cancer screening, and healthcare delivery systems.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3">
              <ShieldCheck className="text-emerald-300" size={19} />

              <p className="text-xs font-bold text-slate-300">
                Committed to responsible healthcare partnerships and reliable service delivery.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
              Solutions
            </p>

            <div className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-bold text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
              Company
            </p>

            <div className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-bold text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
              Contact
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 shrink-0 text-emerald-300"
                  size={18}
                />

                <div>
                  <p className="text-sm font-black text-white">
                    Bahir Dar, Ethiopia
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Serving healthcare organizations in Amhara and beyond
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="shrink-0 text-emerald-300" size={18} />

                <Link
                  href="/contact"
                  className="text-sm font-bold text-slate-300 transition hover:text-white"
                >
                  Send an inquiry
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-emerald-300" size={18} />

                <Link
                  href="/contact"
                  className="text-sm font-bold text-slate-300 transition hover:text-white"
                >
                  Request a callback
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-[#10a66e] px-5 py-3 text-xs font-black text-white transition hover:bg-[#0c9361]"
            >
              Contact MedX
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-400">
            © {year} MedX Healthcare Solutions. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/contact"
              className="text-xs font-bold text-slate-400 transition hover:text-white"
            >
              Supplier inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
