// Google Analytics tracking helpers

// Track external link clicks (like ChowBus order buttons)
export const trackExternalLink = (buttonName: string, location: string) => {
  // Always log for debugging (helps verify tracking code works)
  console.log('🎯 Order button clicked:', { buttonName, location });

  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Send event to GA4 with custom event name (not reserved 'click')
    (window as any).gtag('event', 'order_button_click', {
      button_name: buttonName,
      page_location: location,
      event_category: 'order_button',
      event_label: buttonName,
      // Add callback to ensure event is sent before navigation (not always needed, but helps)
      transport_type: 'beacon',
    });
    console.log('✅ Event sent to Google Analytics');
  } else {
    console.warn('⚠️ Google Analytics not loaded - check NEXT_PUBLIC_GA_ID');
  }
};

// General button click tracking
export const trackButtonClick = (buttonName: string, location?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: buttonName,
      location: location || 'unknown',
    });
  }
};
