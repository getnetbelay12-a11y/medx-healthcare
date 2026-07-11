"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-white py-24">
      <div className="container-medx max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#10a66e]">
          Website error
        </p>
        <h1 className="mt-4 text-4xl font-black text-[#071b33] md:text-6xl">
          Something went wrong.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Please retry the page. If the issue continues, contact MedX with the
          page you were trying to access.
        </p>
        <button type="button" className="btn-primary mt-8" onClick={reset}>
          Try again
        </button>
      </div>
    </section>
  );
}
