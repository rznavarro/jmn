/**
 * Utility for Google Tag Manager dataLayer event tracking
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });
    }
  } catch {
    // Fail silently in restricted sandbox
  }
}

export function trackWhatsAppClick(ubicacion: string) {
  trackEvent('whatsapp_click', { ubicacion });
}

export function trackPhoneClick(ubicacion: string) {
  trackEvent('phone_click', { ubicacion });
}

export function trackFormSubmit(servicio: string) {
  trackEvent('form_submit', { servicio });
}
