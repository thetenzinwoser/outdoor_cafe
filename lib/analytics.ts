// Google Analytics tracking helpers

// Track external link clicks (like ChowBus order buttons)
// locationName should be 'northpark' or 'evanston'
export const trackExternalLink = (locationName: 'northpark' | 'evanston', pageLocation: string) => {
  const eventName = `order_button_click_${locationName}`;

  // Always log for debugging (helps verify tracking code works)
  console.log('🎯 Order button clicked:', { locationName, pageLocation, eventName });

  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Send event to GA4 with location-specific event name
    (window as any).gtag('event', eventName, {
      location_name: locationName,
      page_location: pageLocation,
      event_category: 'order_button',
      // Add callback to ensure event is sent before navigation
      transport_type: 'beacon',
    });
    console.log('✅ Event sent to Google Analytics:', eventName);
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
