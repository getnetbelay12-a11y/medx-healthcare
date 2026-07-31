export type ProductCategory =
  | "Maternal and women's health diagnostics"
  | "Laboratory diagnostics"
  | "Medicines and clinical supply"
  | "Medical consumables";

export const productCatalog = [
  {
    id: "rapid-pre-eclampsia-test-kit",
    name: "Rapid pre-eclampsia test kit",
    category: "Maternal and women's health diagnostics",
    summary: "Early detection screening support for maternal health programs.",
  },
  {
    id: "anemia-screening-panel",
    name: "Anemia screening panel",
    category: "Maternal and women's health diagnostics",
    summary: "Point-of-care hemoglobin testing kit for screening workflows.",
  },
  {
    id: "hpv-self-sampling-kit",
    name: "HPV self-sampling kit",
    category: "Maternal and women's health diagnostics",
    summary: "Cervical-health screening kit designed for private sample collection.",
  },
  {
    id: "maternal-nutritional-panel",
    name: "Maternal nutritional panel",
    category: "Maternal and women's health diagnostics",
    summary: "Vitamin and iron-deficiency testing support for maternal care programs.",
  },
  {
    id: "proteomic-reagent-strips",
    name: "Proteomic reagent strips",
    category: "Laboratory diagnostics",
    summary:
      "Advanced diagnostic reagents on backing material for protein biomarker laboratory analysis.",
  },
  {
    id: "antibiotics-measured-dose",
    name: "Antibiotics, measured dose",
    category: "Medicines and clinical supply",
    summary: "Essential broad-spectrum antibiotics in measured-dose supply formats.",
  },
  {
    id: "sterile-syringes-instruments",
    name: "Sterile syringes and instruments",
    category: "Medical consumables",
    summary:
      "Medical-grade syringes, with and without needles, and essential clinical appliances.",
  },
  {
    id: "medical-grade-plastics",
    name: "Medical-grade plastics",
    category: "Medical consumables",
    summary:
      "Durable laboratory consumables and health apparatus for sample processing workflows.",
  },
] as const satisfies ReadonlyArray<{
  id: string;
  name: string;
  category: ProductCategory;
  summary: string;
}>;

export const phase2CommerceCapabilities = [
  {
    title: "Display products only",
    summary:
      "A product catalog can show approved categories, names, descriptions, and quote paths before direct checkout is enabled.",
  },
  {
    title: "Quotation and supply requests",
    summary:
      "Customers can submit facility details, products needed, expected quantities, urgency, and delivery context.",
  },
  {
    title: "Online sales with cart and payment",
    summary:
      "Direct online sales should launch only after inventory, payment, tax, fulfillment, refund, and compliance controls are ready.",
  },
  {
    title: "Hybrid catalog and commerce",
    summary:
      "Phase 2 can support both direct product purchases and quotation-led institutional supply requests.",
  },
] as const;
