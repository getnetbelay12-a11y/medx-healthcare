import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Thank You",
  description: "Thank you for contacting MedX Healthcare Solutions.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <section className="bg-white py-24">
      <div className="container-medx max-w-3xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
          <CheckCircle2 size={34} />
        </div>
        <h1 className="mt-8 text-4xl font-black text-[#071b33] md:text-6xl">
          Thank you
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Your MedX inquiry has been received when the contact service is
          configured. A reference ID will appear after a successful submission.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/services" className="btn-primary">
            Explore services
          </Link>
          <Link href="/contact" className="btn-outline">
            Back to contact
          </Link>
        </div>
      </div>
    </section>
  );
}
