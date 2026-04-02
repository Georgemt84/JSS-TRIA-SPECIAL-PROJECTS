const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

function hasRealMeasurementId(id) {
  return typeof id === 'string' && /^G-[A-Z0-9]+$/i.test(id) && id !== 'G-XXXXXXXXXX';
}

if (hasRealMeasurementId(GA_MEASUREMENT_ID)) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_path: `${window.location.pathname}${window.location.search}`,
    page_location: window.location.href,
  });
}
