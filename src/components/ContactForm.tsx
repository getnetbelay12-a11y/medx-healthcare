"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="card-premium p-7 md:p-9">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Full Name
          </label>
          <input
            required
            name="fullName"
            autoComplete="name"
            className="input-medx"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Organization
          </label>
          <input
            name="organization"
            autoComplete="organization"
            className="input-medx"
            placeholder="Organization name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="input-medx"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="input-medx"
            placeholder="+251..."
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-slate-700">
          Inquiry Type
        </label>
        <select required name="inquiryType" className="input-medx">
          <option value="">Select inquiry type</option>
          <option>Pharmaceutical Supply</option>
          <option>Medical Devices</option>
          <option>Diagnostic Solutions</option>
          <option>Cervical Cancer Screening</option>
          <option>Partnership</option>
          <option>Investment</option>
          <option>Research Collaboration</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-slate-700">
          Message
        </label>
        <textarea
          required
          name="message"
          className="input-medx min-h-36"
          placeholder="Tell us how MedX can support your organization."
        />
      </div>

      <button type="submit" className="btn-primary mt-7">
        Submit Inquiry
      </button>

      {sent && (
        <p className="mt-5 rounded-2xl bg-emerald-50 p-4 font-bold text-emerald-700">
          Thank you. Your inquiry has been received in this frontend prototype.
          Email delivery will be connected before production use.
        </p>
      )}
    </form>
  );
}
