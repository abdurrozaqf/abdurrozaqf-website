import type { AnalyticsEvent } from "@/constants/analytics";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Pushes an event onto the GTM dataLayer.
 *
 * Analytics must never break the interaction it is attached to, so this is a
 * no-op during SSR and when GTM is unavailable (e.g. blocked by an ad blocker).
 */
export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;

  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...params });
  } catch {
    // Swallow: tracking failures must not surface to the user.
  }
}
