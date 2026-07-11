import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="container-medx max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#10a66e]">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-black text-[#071b33] md:text-6xl">
          This page is not available.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The page may have moved, or the address may be incorrect.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Return home
        </Link>
      </div>
    </section>
  );
}
