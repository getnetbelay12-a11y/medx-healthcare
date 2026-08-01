"use client";

import { CheckCircle2, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

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
  | { status: "sent"; message: string }
  | { status: "error"; message: string };

const successMessage =
  "Thank you for sending. We will get back to you as soon as possible.";

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
      quickChat: true,
      fullName,
      organization,
      email,
      phone,
      service,
      message,
      privacyConsent,
      startedAt,
    };

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Your message could not be sent. Please try again.");
      }

      setSubmitState({
        status: "sent",
        message: successMessage,
      });
      setMessage("");
      setStartedAt(Date.now());
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again.",
      });
    }
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
            {submitState.status === "sent" ? (
              <div className="quick-chat-success" role="status">
                <CheckCircle2 size={28} />
                <h3>Message sent</h3>
                <p>{submitState.message}</p>
                <button
                  type="button"
                  className="quick-chat-secondary"
                  onClick={() => setSubmitState({ status: "idle" })}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
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

            {submitState.status === "error" ? (
              <p className="quick-chat-error" role="alert">
                {submitState.message}
              </p>
            ) : null}

            <button
              type="submit"
              className="quick-chat-submit"
              disabled={submitState.status === "sending" || !privacyConsent}
              aria-disabled={submitState.status === "sending" || !privacyConsent}
            >
              <Send size={16} />
              {submitState.status === "sending" ? "Sending" : "Send"}
            </button>
              </>
            )}
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
