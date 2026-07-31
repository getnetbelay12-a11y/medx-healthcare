import { describe, expect, it } from "vitest";
import { phase2CommerceCapabilities, productCatalog } from "@/data/products";

describe("product catalog", () => {
  it("publishes the MedX reference product lines as a quote-first catalog", () => {
    const productNames = productCatalog.map((product) => product.name).join("\n");

    expect(productCatalog).toHaveLength(8);
    expect(productNames).toContain("Rapid pre-eclampsia test kit");
    expect(productNames).toContain("Anemia screening panel");
    expect(productNames).toContain("HPV self-sampling kit");
    expect(productNames).toContain("Maternal nutritional panel");
    expect(productNames).toContain("Proteomic reagent strips");
    expect(productNames).toContain("Antibiotics, measured dose");
    expect(productNames).toContain("Sterile syringes and instruments");
    expect(productNames).toContain("Medical-grade plastics");
  });

  it("keeps draft prices out of product data until quotation terms are approved", () => {
    const publicCopy = JSON.stringify(productCatalog);

    expect(publicCopy).not.toContain("450 ETB");
    expect(publicCopy).not.toContain("300 ETB");
    expect(publicCopy).not.toContain("850 ETB");
  });

  it("keeps online checkout clearly assigned to Phase 2", () => {
    const roadmapCopy = phase2CommerceCapabilities
      .map((capability) => `${capability.title} ${capability.summary}`)
      .join("\n");

    expect(roadmapCopy).toContain("Display products only");
    expect(roadmapCopy).toContain("Quotation and supply requests");
    expect(roadmapCopy).toContain("Online sales with cart and payment");
    expect(roadmapCopy).toContain("Hybrid catalog and commerce");
  });
});
