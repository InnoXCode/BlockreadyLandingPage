/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Application Constants
 * ------------------------------------------------------------
 *
 * Immutable values shared throughout the application.
 *
 * IMPORTANT
 * - No business logic.
 * - No environment values.
 * - No configuration.
 * - Only constants.
 * ------------------------------------------------------------
 */

/* ============================================================
   Event Names
============================================================ */

export const EVENTS = Object.freeze({
  PAGE_VIEW: "page_view",

  CTA_CLICK: "cta_click",

  CHECKOUT_CLICK: "checkout_click",

  BOOKING_CLICK: "booking_click",

  BILLING_PERIOD_CHANGE: "billing_period_change",

  CURRENCY_CHANGE: "currency_change",

  MOBILE_PLAN_VIEW: "mobile_plan_view",
});

export const FEATURES = Object.freeze({
  CLARITY_ENABLED: false,  
  NAVIGATION: true,
  CONSENT_BANNER: true,
  ANALYTICS: true,
  PRICING: true,
  FAQ: true,
  TESTIMONIALS: true,
  CURRENCY_SWITCHER: true,
  DEBUG_TOOLS: IS_DEVELOPMENT,
});

/* ============================================================
   Storage Keys
============================================================ */

export const STORAGE_KEYS = Object.freeze({
  CONSENT: "br_consent",

  ATTRIBUTION: "br_attribution",

  CURRENCY: "br_currency",

  BILLING_PERIOD: "br_billing_period",
});

/* ============================================================
   Cookie Names
============================================================ */

export const COOKIE_KEYS = Object.freeze({
  CONSENT: "br_consent",

  ATTRIBUTION: "br_attribution",
});

/* ============================================================
   Data Attributes
============================================================ */

export const DATA_ATTRIBUTES = Object.freeze({
  CTA: "data-cta",

  NAVIGATION: "data-nav",

  PRICING: "data-pricing",

  CTA_LOCATION: "data-cta-location",

  ACCORDION: "data-accordion",

  TAB: "data-tab",

  MODAL: "data-modal",
});

/* ============================================================
   Billing Periods
============================================================ */

export const BILLING_PERIODS = Object.freeze({
  ANNUAL: "annual",

  LIFETIME: "lifetime",
});

/* ============================================================
   Supported Currency Codes
============================================================ */

export const CURRENCIES = Object.freeze({
  USD: "USD",

  EUR: "EUR",

  GBP: "GBP",

  AUD: "AUD",

  CAD: "CAD",

  NZD: "NZD",

  SGD: "SGD",

  AED: "AED",
});

/* ============================================================
   Responsive Breakpoints
============================================================ */

export const BREAKPOINTS = Object.freeze({
  MOBILE: 480,

  MOBILE_LARGE: 640,

  TABLET: 768,

  TABLET_LARGE: 992,

  LAPTOP: 1200,

  DESKTOP: 1440,

  DESKTOP_LARGE: 1600,

  DESKTOP_XL: 1920,
});

/* ============================================================
   Animation Timing (milliseconds)
============================================================ */

export const ANIMATION = Object.freeze({
  FAST: 150,

  NORMAL: 300,

  SLOW: 500,
});

/* ============================================================
   Transition Easing
============================================================ */

export const EASING = Object.freeze({
  STANDARD: "ease",

  EASE_IN: "ease-in",

  EASE_OUT: "ease-out",

  EASE_IN_OUT: "ease-in-out",
});

/* ============================================================
   Default Export
============================================================ */

const CONSTANTS = Object.freeze({
  EVENTS,

  STORAGE_KEYS,

  COOKIE_KEYS,

  DATA_ATTRIBUTES,

  BILLING_PERIODS,

  CURRENCIES,

  BREAKPOINTS,

  ANIMATION,

  EASING,
});

export default CONSTANTS;