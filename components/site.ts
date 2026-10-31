// Shared site-wide constants and helpers.

export const CONTACT_EMAIL = "seaflint@soton.ac.uk";
export const LOGIN_URL = "https://seaflint.soton.ac.uk/users/login";
export const PAPER_URL = "https://arxiv.org/abs/2602.11248";

/**
 * Build a mailto href for an enquiry. The email form/backend is deferred, so
 * every contact CTA opens the visitor's mail client with a route-specific
 * subject line.
 */
export function mailto(subject: string, body?: string): string {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}?${params.join("&")}`;
}
