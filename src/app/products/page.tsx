import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, CreditCard, PackageSearch, ShoppingCart } from "lucide-react";
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
  image: medxImages.aiSupplyFrame.src,
});

const categoryOrder = [
  "Maternal and women's health diagnostics",
  "Laboratory diagnostics",
  "Medicines and clinical supply",
  "Medical consumables",
] as const;

const phase2Icons = [PackageSearch, ClipboardList, ShoppingCart, CreditCard] as const;

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title="Diagnostic products and medical supplies for institutional requests."
        description="MedX supports healthcare facilities with diagnostic solutions, laboratory equipment, pharmaceutical products, and medical consumables tailored to regional clinic and hospital needs."
        highlights={["Catalog view", "Quotation requests", "Phase 2 commerce"]}
        image={medxImages.aiSupplyFrame}
        imageLabel="Product access"
        imageCaption="Catalog • quote • Phase 2 commerce"
      />

      <section className="bg-white py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Catalog"
            title="Product lines from the MedX supply reference."
            description="The catalog is organized for institutional review and quotation requests. Availability, quantities, documentation, and final pricing should be confirmed through MedX before procurement."
            centered
          />

          <div className="mt-12 grid gap-10">
            {categoryOrder.map((category) => {
              const products = productCatalog.filter((product) => product.category === category);

              return (
                <div key={category}>
                  <div className="mb-5 flex flex-col gap-3 border-b border-slate-200 pb-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#10a66e]">
                        Product category
                      </p>
                      <h2 className="mt-2 text-2xl font-black leading-tight text-[#071b33]">
                        {category}
                      </h2>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-black text-[#0a7c5b] transition hover:text-[#071b33]"
                    >
                      Request quotation
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {products.map((product) => (
                      <article key={product.id} className="card-premium p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                          <PackageSearch size={22} />
                        </div>
                        <h3 className="mt-6 text-xl font-black leading-tight text-[#071b33]">
                          {product.name}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {product.summary}
                        </p>
                        <div className="mt-5 flex items-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-black text-[#0a7c5b]">
                          <CheckCircle2 size={15} />
                          Quotation required
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Phase 2"
            title="Commerce roadmap: catalog, quotations, cart, and payment."
            description="Phase 2 should support both institutional quotation requests and direct online sales, but checkout must only go live after the operating controls behind it are ready."
            centered
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {phase2CommerceCapabilities.map((capability, index) => {
              const Icon = phase2Icons[index];

              return (
                <article key={capability.title} className="card-premium p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071b33] text-white">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-[#10a66e]">
                      Phase 2
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-black leading-tight text-[#071b33]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {capability.summary}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">
              Implementation discipline
            </p>
            <p className="mt-3 leading-8 text-slate-700">
              A medical product store is not just a cart. Before direct online
              payment is enabled, MedX needs approved product data, inventory
              rules, delivery coverage, payment provider setup, return and
              refund terms, tax handling, and compliance review.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
