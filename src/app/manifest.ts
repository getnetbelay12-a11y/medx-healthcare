import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MedX Healthcare Solutions",
    short_name: "MedX",
    description:
      "Healthcare solutions across supply, diagnostics, medical devices, cervical-screening support, and strategic health-system capacity.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071b33",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
