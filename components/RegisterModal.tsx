"use client";

import { useState, type FormEvent } from "react";
import { useRegister } from "./RegisterContext";

export default function RegisterModal() {
  const { open, closeRegister } = useRegister();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setName("");
    setEmail("");
    setOrg("");
    setSubmitted(false);
  };

  const handleClose = () => {
    closeRegister();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email) return;
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganisation: ${org || "N/A"}`
    );
    window.location.href = `mailto:seaflint@soton.ac.uk?subject=${encodeURIComponent(
      "SeaFlint Registration Request"
    )}&body=${body}`;
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Register for SeaFlint"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-md bg-surface rounded-2xl border border-outline-variant shadow-2xl p-2xl">
        <div className="flex items-start justify-between mb-lg">
          <div>
            <h2 className="font-h2 text-h2 text-on-surface mb-xs">Request Access</h2>
            <p className="font-body-sm text-on-surface-variant">
              Fill in your details and we&apos;ll get in touch to set up your account.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-surface-container transition-colors shrink-0 ml-md"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-on-surface-variant">close</span>
          </button>
        </div>

        {submitted ? (
          /* Success state */
          <div className="text-center py-2xl">
            <span className="material-symbols-outlined text-primary text-5xl block mb-md">
              check_circle
            </span>
            <p className="font-body-lg text-on-surface font-semibold mb-sm">Request sent!</p>
            <p className="font-body-sm text-on-surface-variant mb-lg">
              We&apos;ll review your details and be in touch at{" "}
              <span className="text-on-surface font-medium">{email}</span>.
            </p>
            <button
              onClick={() => {
                closeRegister();
                reset();
              }}
              className="bg-primary text-on-primary hover:bg-primary/90 h-9 px-4 inline-flex items-center rounded-md text-sm font-medium transition-all active:scale-95"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-md">
            <div>
              <label htmlFor="reg-name" className="block font-label-md text-on-surface mb-xs">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                id="reg-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jane Smith"
                className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-md py-sm font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>
            <div>
              <label htmlFor="reg-email" className="block font-label-md text-on-surface mb-xs">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                id="reg-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="jane@company.com"
                className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-md py-sm font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>
            <div>
              <label htmlFor="reg-org" className="block font-label-md text-on-surface mb-xs">
                Organisation{" "}
                <span className="font-normal text-on-surface-variant">(optional)</span>
              </label>
              <input
                id="reg-org"
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="Shipping Co. Ltd"
                className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-md py-sm font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>
            <p className="font-body-sm text-on-surface-variant">
              Submitting will open your email client with a pre-filled message to{" "}
              <a href="mailto:seaflint@soton.ac.uk" className="text-primary underline">
                seaflint@soton.ac.uk
              </a>
              .
            </p>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary hover:bg-primary/90 h-11 px-4 inline-flex items-center justify-center rounded-lg font-label-md text-label-md active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Send Registration Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
