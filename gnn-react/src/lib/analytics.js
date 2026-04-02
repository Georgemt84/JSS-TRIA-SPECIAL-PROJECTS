const GA_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;

function hasRealMeasurementId(id) {
  return typeof id === 'string' && /^G-[A-Z0-9]+$/i.test(id);
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
}

let initialized = false;

export function initAnalytics() {
  if (initialized || !hasRealMeasurementId(GA_MEASUREMENT_ID)) {
    return;
  }

  ensureGtag();

  if (!document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
  initialized = true;
}

export function trackPageView(path, title) {
  if (!hasRealMeasurementId(GA_MEASUREMENT_ID) || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_title: title,
    page_path: path,
    page_location: window.location.href,
  });
}
