"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { publicEnv } from "@/lib/env";

const serviceOptions = [
  "Product and supply request",
  "Pharmaceutical supply",
  "Medical devices and equipment",
  "Diagnostic and laboratory solutions",
  "Cervical-screening program support",
  "Public-health program",
  "Partnership or relationship inquiry",
  "Not sure yet",
];

type SubmitState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent"; message: string };

const thankYouMessage =
  "Thank you. We received your request and will get back to you within 48 hours, and sooner whenever possible.";

function whatsappHref(phone: string, text: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export default function QuickChat() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState(serviceOptions[0]);
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const requestText = useMemo(() => {
    return [
      "MedX service request",
      `Service: ${service}`,
      fullName ? `Name: ${fullName}` : "",
      organization ? `Organization: ${organization}` : "",
      email ? `Email: ${email}` : "",
      phone ? `Phone: ${phone}` : "",
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }, [email, fullName, message, organization, phone, service]);

  const whatsappLink = whatsappHref(publicEnv.whatsappPhone, requestText);

  function resetChat() {
    setOpen((current) => !current);
    setSubmitState({ status: "idle" });
    if (!open) {
      setStartedAt(Date.now());
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ status: "sending" });

    const payload = {
      fullName,
      organization,
      email,
      phone,
      country: "Not specified",
      cityRegion: "Not specified",
      inquiryType: service.includes("Partnership")
        ? "Partnership inquiry"
        : service.includes("Pharmaceutical")
          ? "Pharmaceutical request"
          : service.includes("Medical devices")
            ? "Medical-device request"
            : service.includes("Diagnostic")
              ? "Diagnostic inquiry"
              : service.includes("Cervical")
                ? "Cervical-screening program"
                : service.includes("Public-health")
                  ? "Public-health program"
                  : "Product and supply request",
      productService: service,
      estimatedQuantity: "",
      urgency: "Routine",
      preferredTimeline: "Exploratory",
      message,
      privacyConsent,
      website: "",
      startedAt,
      turnstileToken: "",
    };

    try {
      await fetch("/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // WhatsApp remains the primary handoff; email delivery is a secondary production channel.
    }

    window.open(whatsappLink, "_blank", "noopener,noreferrer");

    setSubmitState({
      status: "sent",
      message: thankYouMessage,
    });
  }

  return (
    <div className="quick-chat" aria-live="polite">
      {open && (
        <section className="quick-chat-panel" aria-label="MedX quick service request">
          <div className="quick-chat-header">
            <div>
              <p>MedX support</p>
              <h2>How can we help?</h2>
            </div>
            <button type="button" onClick={resetChat} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="quick-chat-form">
            <label>
              Service needed
              <select value={service} onChange={(event) => setService(event.target.value)}>
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <div className="quick-chat-grid">
              <label>
                Name
                <input
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  minLength={2}
                  required
                  autoComplete="name"
                />
              </label>
              <label>
                Organization
                <input
                  value={organization}
                  onChange={(event) => setOrganization(event.target.value)}
                  minLength={2}
                  required
                  autoComplete="organization"
                />
              </label>
            </div>

            <div className="quick-chat-grid">
              <label>
                Email
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  required
                  autoComplete="email"
                />
              </label>
              <label>
                Phone
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  type="tel"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label>
              Message
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                minLength={20}
                maxLength={1200}
                required
                rows={4}
                placeholder="Tell us what product, service, quantity, or program support you need."
              />
            </label>

            <label className="quick-chat-consent">
              <input
                type="checkbox"
                checked={privacyConsent}
                onChange={(event) => setPrivacyConsent(event.target.checked)}
                required
              />
              I agree MedX may use this information to respond to my request.
            </label>

            {submitState.status !== "idle" && submitState.status !== "sending" && (
              <p
                className="quick-chat-message quick-chat-message-ok"
              >
                {submitState.message}
              </p>
            )}

            <button type="submit" className="quick-chat-submit" disabled={submitState.status === "sending"}>
              <Send size={16} />
              {submitState.status === "sending" ? "Sending" : "Send"}
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="quick-chat-button"
        onClick={resetChat}
        aria-expanded={open}
        aria-label={open ? "Close MedX quick request" : "Open MedX quick request"}
      >
        {open ? <X size={22} /> : <MessageCircle size={23} />}
        <span>{open ? "Close" : "Chat"}</span>
      </button>
    </div>
  );
}
