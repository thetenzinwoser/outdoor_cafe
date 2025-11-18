// Google Analytics tracking helpers

// Track external link clicks (like ChowBus order buttons)
export const trackExternalLink = (buttonName: string, location: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'click', {
      event_category: 'order_button',
      event_label: buttonName,
      location: location,
    });
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
