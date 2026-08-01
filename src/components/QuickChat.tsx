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
  | { status: "sending" };

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

    if (fullName.trim() && organization.trim() && email.trim() && privacyConsent) {
      void fetch("/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {
        // The WhatsApp handoff still opens even when the optional email channel is unavailable.
      });
    }

    window.location.assign(whatsappLink);
  }

  return (
    <div className="quick-chat" aria-live="polite">
      {open && (
        <section className="quick-chat-panel" aria-label="MedX quick service request">
          <div className="quick-chat-header">
            <div>
              <p>MedX support</p>
              <h2>How can we help?</h2>
              <span>Response within 48 hours or sooner</span>
            </div>
            <button type="button" onClick={resetChat} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="quick-chat-form">
            <p className="quick-chat-intro">
              Write what you need. Add your contact details if you want MedX
              to follow up by email or phone.
            </p>

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
                  autoComplete="name"
                />
              </label>
              <label>
                Organization
                <input
                  value={organization}
                  onChange={(event) => setOrganization(event.target.value)}
                  minLength={2}
                  autoComplete="organization"
                />
              </label>
            </div>

            <div className="quick-chat-grid">
              <label>
                Work email
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  autoComplete="email"
                />
              </label>
              <label>
                Phone, optional
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  type="tel"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label>
              Request details
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={1200}
                required
                rows={4}
                placeholder="Tell us the product, quantity, destination, timeline, or support you need."
              />
            </label>

            <label className="quick-chat-consent">
              <input
                type="checkbox"
                checked={privacyConsent}
                onChange={(event) => setPrivacyConsent(event.target.checked)}
              />
              I agree MedX may use this information to respond to my request.
            </label>

            <button
              type="submit"
              className="quick-chat-submit"
              disabled={submitState.status === "sending"}
            >
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
