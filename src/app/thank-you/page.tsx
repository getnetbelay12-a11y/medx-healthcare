import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { medxImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Thank You",
  description: "Thank you for contacting MedX Healthcare Solutions.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Request received"
        title="Thank you"
        description="Your MedX inquiry has been received. A reference ID appears after a successful submission."
        highlights={["Inquiry review", "Responsible follow-up", "Clear next steps"]}
        image={medxImages.labDiagnosticsHero}
        imageLabel="MedX response"
        imageCaption="Review - route - follow-up"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-medx max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
            <CheckCircle2 size={34} />
          </div>
          <h2 className="mt-8 text-3xl font-black text-[#071b33] md:text-4xl">
            Continue with MedX
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            You can review services or return to the contact page if you need to
            send another request.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/services" className="btn-primary">
              Explore services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-4 font-black text-[#071b33] transition hover:border-[#10a66e] hover:text-[#10a66e]"
            >
              Back to contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
