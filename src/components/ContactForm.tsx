"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactSchema,
  inquiryTypes,
  timelineOptions,
  urgencyOptions,
  type ContactFormValues,
} from "@/lib/contact-schema";

type ApiState =
  | { status: "idle" }
  | { status: "success"; requestId: string }
  | { status: "error"; message: string; requestId?: string };

const baseDefaults: ContactFormValues = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  country: "",
  cityRegion: "",
  inquiryType: "Product and supply request",
  productService: "",
  estimatedQuantity: "",
  urgency: "Routine",
  preferredTimeline: "Exploratory",
  message: "",
  privacyConsent: false,
  website: "",
  startedAt: Date.now(),
  turnstileToken: "",
};

export default function ContactForm() {
  const [apiState, setApiState] = useState<ApiState>({ status: "idle" });
  const [startedAt] = useState(() => new Date().getTime());

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { ...baseDefaults, startedAt },
  });

  useEffect(() => {
    const scriptId = "turnstile-script";
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey || document.getElementById(scriptId)) return;
    const windowWithTurnstile = window as Window & {
      medxTurnstileCallback?: (token: string) => void;
    };
    windowWithTurnstile.medxTurnstileCallback = (token: string) => {
      setValue("turnstileToken", token, { shouldValidate: true });
    };
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, [setValue]);

  async function onSubmit(values: ContactFormValues) {
    setApiState({ status: "idle" });
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = (await response.json().catch(() => null)) as
      | { ok?: boolean; requestId?: string; message?: string }
      | null;

    if (!response.ok || !result?.ok) {
      setApiState({
        status: "error",
        message:
          result?.message ||
          "Your inquiry could not be submitted. Please try again later.",
        requestId: result?.requestId,
      });
      return;
    }

    reset({ ...baseDefaults, startedAt: new Date().getTime() });
    setApiState({ status: "success", requestId: result.requestId || "MEDX" });
  }

  const errorSummary = Object.values(errors)
    .map((error) => error?.message)
    .filter(Boolean);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-premium p-7 md:p-9"
      noValidate
    >
      <div className="mb-7">
        <h2 className="text-2xl font-black text-[#071b33]">Submit an inquiry</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Do not submit sensitive medical information through this general form.
        </p>
      </div>

      {errorSummary.length > 0 && (
        <div
          className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800"
          role="alert"
        >
          Please correct the highlighted fields before submitting.
        </div>
      )}

      <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />
      <input type="hidden" {...register("turnstileToken")} />
      <input
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("website")}
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message}>
          <input className="input-medx" autoComplete="name" {...register("fullName")} />
        </Field>
        <Field label="Organization" error={errors.organization?.message}>
          <input
            className="input-medx"
            autoComplete="organization"
            {...register("organization")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            className="input-medx"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
        </Field>
        <Field label="Phone, optional" error={errors.phone?.message}>
          <input className="input-medx" type="tel" autoComplete="tel" {...register("phone")} />
        </Field>
        <Field label="Country" error={errors.country?.message}>
          <input className="input-medx" autoComplete="country-name" {...register("country")} />
        </Field>
        <Field label="City or region" error={errors.cityRegion?.message}>
          <input
            className="input-medx"
            autoComplete="address-level2"
            {...register("cityRegion")}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Field label="Inquiry type" error={errors.inquiryType?.message}>
          <select className="input-medx" {...register("inquiryType")}>
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label="Product or service requested" error={errors.productService?.message}>
          <input className="input-medx" {...register("productService")} />
        </Field>
        <Field label="Estimated quantity, optional" error={errors.estimatedQuantity?.message}>
          <input className="input-medx" {...register("estimatedQuantity")} />
        </Field>
        <Field label="Urgency" error={errors.urgency?.message}>
          <select className="input-medx" {...register("urgency")}>
            {urgencyOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred timeline" error={errors.preferredTimeline?.message}>
          <select className="input-medx" {...register("preferredTimeline")}>
            {timelineOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" error={errors.message?.message}>
          <textarea className="input-medx min-h-40" {...register("message")} />
        </Field>
      </div>

      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
        <div
          className="cf-turnstile mt-5"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          data-callback="medxTurnstileCallback"
        />
      )}

      <label className="mt-6 flex items-start gap-3 text-sm font-bold leading-6 text-slate-700">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#10a66e]"
          {...register("privacyConsent")}
        />
        <span>
          I consent to MedX processing this inquiry and understand this form is
          not for medical emergencies or sensitive medical information.
        </span>
      </label>
      {errors.privacyConsent?.message && (
        <p className="mt-2 text-sm font-bold text-red-700">
          {errors.privacyConsent.message}
        </p>
      )}

      <button type="submit" className="btn-primary mt-7" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="animate-spin" size={17} /> : null}
        Submit inquiry
      </button>

      {apiState.status === "success" && (
        <p className="mt-5 rounded-2xl bg-emerald-50 p-4 font-bold text-emerald-800">
          Inquiry received. Reference ID: {apiState.requestId}
        </p>
      )}

      {apiState.status === "error" && (
        <p className="mt-5 rounded-2xl bg-red-50 p-4 font-bold text-red-800" role="alert">
          {apiState.message}
          {apiState.requestId ? ` Reference ID: ${apiState.requestId}` : ""}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
      {children}
      {error && <span className="mt-2 block text-sm font-bold text-red-700">{error}</span>}
    </label>
  );
}
