"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="container-medx flex h-[78px] items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10a66e] text-lg font-black text-white shadow-lg shadow-emerald-600/20">
            MX
          </div>
          <div>
            <p className="text-2xl font-black leading-none tracking-tight text-[#071b33]">
              MedX
            </p>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.34em] text-[#10a66e]">
              Healthcare Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-black text-[#071b33] transition hover:text-[#10a66e] ${
                isActive(link.href)
                  ? "after:absolute after:-bottom-3 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#10a66e]"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden lg:inline-flex btn-primary">
          Partner With MedX
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-medx flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-bold text-slate-700"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Partner With MedX
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
