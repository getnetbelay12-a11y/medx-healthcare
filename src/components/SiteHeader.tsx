"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, PackageCheck, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Public Health", href: "/public-health" },
  { label: "Strategy", href: "/strategy" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 shadow-[0_10px_30px_rgba(8,27,51,0.04)] backdrop-blur-xl">
      <div className="container-medx">
        <div className="flex min-h-[76px] items-center justify-between gap-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#071b33] text-sm font-black text-white shadow-[0_8px_20px_rgba(8,27,51,0.18)] ring-4 ring-emerald-50">
              MX
            </div>

            <div>
              <p className="text-lg font-black leading-none tracking-tight text-[#071b33]">
                MedX
              </p>

              <p className="mt-1.5 text-[8px] font-black uppercase tracking-[0.27em] text-[#10a66e]">
                Healthcare Solutions
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-lg px-3.5 py-3 text-xs font-black transition ${
                    active
                      ? "text-[#071b33]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#071b33]"
                  }`}
                >
                  {item.label}

                  {active && (
                    <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-[#10a66e]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-xs font-black text-[#071b33] transition hover:border-emerald-200 hover:bg-emerald-50"
            >
              Partner inquiry
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#10a66e] px-5 text-xs font-black text-white shadow-[0_10px_26px_rgba(16,166,110,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0d9562]"
            >
              <PackageCheck size={16} />
              Supply request
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#071b33] lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-navigation" className="border-t border-slate-100 pb-5 pt-4 lg:hidden">
            <nav className="grid gap-1">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-black transition ${
                      active
                        ? "bg-emerald-50 text-[#0a8d63]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}

                    {active && (
                      <span className="h-2 w-2 rounded-full bg-[#10a66e]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 text-sm font-black text-[#071b33]"
              >
                Partner inquiry
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#10a66e] text-sm font-black text-white"
              >
                <PackageCheck size={17} />
                Supply request
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
