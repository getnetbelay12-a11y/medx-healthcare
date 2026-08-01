import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileText,
  HeartPulse,
  Layers3,
  PackageCheck,
  PackageSearch,
  ShoppingCart,
  Truck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import { phase2CommerceCapabilities, productCatalog } from "@/data/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Product Catalog",
  description:
    "MedX product catalog for diagnostics, laboratory supplies, medicines, clinical supplies, and Phase 2 quotation and commerce planning.",
  path: "/products",
  image: medxImages.supplyCatalogHero.src,
});

const categoryOrder = [
  "Maternal and women's health diagnostics",
  "Laboratory diagnostics",
  "Medicines and clinical supply",
  "Medical consumables",
] as const;

const categoryDetails = {
  "Maternal and women's health diagnostics": {
    icon: HeartPulse,
    anchor: "maternal-diagnostics",
    label: "Screening programs",
    summary: "Women's-health diagnostic products and program support requests.",
  },
  "Laboratory diagnostics": {
    icon: Beaker,
    anchor: "laboratory-diagnostics",
    label: "Lab readiness",
    summary: "Diagnostic reagents and laboratory workflow support.",
  },
  "Medicines and clinical supply": {
    icon: PackageCheck,
    anchor: "medicines-clinical-supply",
    label: "Clinical supply",
    summary: "Medicine and clinical supply requests for facility review.",
  },
  "Medical consumables": {
    icon: Layers3,
    anchor: "medical-consumables",
    label: "Consumables",
    summary: "Sterile, laboratory, and facility-use consumables.",
  },
} as const;

const phase2Icons = [PackageSearch, ClipboardList, ShoppingCart, CreditCard] as const;

const requestSteps = [
  {
    icon: ClipboardList,
    title: "1. Select the product need",
    detail: "Share category, product name, facility type, estimated quantity, and urgency.",
  },
  {
    icon: FileText,
    title: "2. Confirm scope",
    detail: "MedX reviews availability, documentation needs, delivery context, and quotation path.",
  },
  {
    icon: Truck,
    title: "3. Coordinate supply",
    detail: "Approved requests move into sourcing, logistics, follow-up, or program discussion.",
  },
] as const;

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title="Diagnostic products and medical supplies for institutional requests."
        description="MedX supports healthcare facilities with diagnostic solutions, laboratory equipment, pharmaceutical products, and medical consumables tailored to regional clinic and hospital needs."
        highlights={["Catalog view", "Quotation requests", "Phase 2 commerce"]}
        image={medxImages.supplyCatalogHero}
        imageLabel="Product access"
        imageCaption="Catalog • quote • Phase 2 commerce"
      />

      <section className="bg-white py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Catalog"
            title="A procurement-ready catalog, not a simple product list."
            description="Products are grouped for institutional review. Availability, quantities, documentation, delivery coverage, and final pricing must be confirmed through MedX before procurement."
            centered
          />

          <div className="medx-catalog-command mt-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
                Quote-first workflow
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">
                Built for facilities that need clarity before procurement.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                The catalog should help a clinic, hospital, laboratory, NGO, or
                public-health program submit a clean supply request without
                guessing what MedX needs to review.
              </p>
            </div>

            <div className="grid gap-3">
              {requestSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article key={step.title} className="medx-request-step">
                    <div>
                      <Icon size={21} />
                    </div>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categoryOrder.map((category) => {
              const details = categoryDetails[category];
              const Icon = details.icon;
              const products = productCatalog.filter((product) => product.category === category);

              return (
                <a key={category} href={`#${details.anchor}`} className="medx-category-tile">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                      <Icon size={23} />
                    </div>
                    <span>{products.length} items</span>
                  </div>
                  <p>{details.label}</p>
                  <h3>{category}</h3>
                  <small>{details.summary}</small>
                </a>
              );
            })}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_21rem] lg:items-start">
            <div className="grid gap-8">
              {categoryOrder.map((category) => {
                const details = categoryDetails[category];
                const Icon = details.icon;
                const products = productCatalog.filter((product) => product.category === category);

                return (
                  <section key={category} id={details.anchor} className="medx-product-category">
                    <div className="medx-product-category-header">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#071b33] text-white">
                          <Icon size={23} />
                        </div>
                        <div>
                          <p className="medx-category-eyebrow">
                            {details.label}
                          </p>
                          <h2>{category}</h2>
                          <p>{details.summary}</p>
                        </div>
                      </div>

                      <Link href="/contact" className="medx-category-action">
                        Request this category
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    <div className="grid gap-4">
                      {products.map((product, productIndex) => (
                        <article key={product.id} className="medx-product-row">
                          <div className="medx-product-row-index">
                            {String(productIndex + 1).padStart(2, "0")}
                          </div>
                          <div>
                            <h3>{product.name}</h3>
                            <p>{product.summary}</p>
                            <div className="medx-product-tags">
                              <span>
                                <PackageSearch size={14} />
                                Quote required
                              </span>
                              <span>
                                <CheckCircle2 size={14} />
                                Institutional review
                              </span>
                            </div>
                          </div>
                          <Link href="/contact" className="medx-product-row-action">
                            Request quote
                            <ArrowRight size={15} />
                          </Link>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>

            <aside className="medx-quote-panel">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#10a66e]">
                Supply request
              </p>
              <h2>Send a request MedX can actually act on.</h2>
              <p>
                Include the product name, facility or program location,
                estimated quantity, urgency, and any documentation requirement.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Product or category",
                  "Quantity and timeline",
                  "Destination facility",
                  "Decision owner",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700">
                    <CheckCircle2 className="text-[#10a66e]" size={17} />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary mt-7 w-full">
                Submit quotation request
                <ArrowRight size={17} />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-band py-20">
        <div className="container-medx">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Phase 2"
                title="Commerce roadmap: catalog, quotations, cart, and payment."
                description="Phase 2 should support both institutional quotation requests and direct online sales, but checkout must only go live after the operating controls behind it are ready."
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {phase2CommerceCapabilities.map((capability, index) => {
                const Icon = phase2Icons[index];

                return (
                  <article key={capability.title} className="medx-commerce-card">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071b33] text-white">
                        <Icon size={22} />
                      </div>
                      <span>Phase 2</span>
                    </div>
                    <h3>{capability.title}</h3>
                    <p>{capability.summary}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-medx">
          <div className="medx-product-final-cta">
            <div>
              <p>Ready to request products?</p>
              <h2>Start with a quotation or supply request.</h2>
            </div>
            <Link href="/contact" className="btn-primary">
              Contact MedX
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
