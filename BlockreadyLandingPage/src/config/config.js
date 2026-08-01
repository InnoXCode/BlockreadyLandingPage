/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Global Application Configuration
 * ------------------------------------------------------------
 *
 * This file contains all configurable values used throughout
 * the application.
 *
 * IMPORTANT:
 * - Do NOT place business logic here.
 * - Do NOT hardcode checkout URLs here.
 * - Do NOT initialize services here.
 *
 * This file should only export configuration objects.
 * ------------------------------------------------------------
 */

/**
 * Current Environment
 */
const ENVIRONMENT = import.meta.env.MODE;

/**
 * Is Development
 */
const IS_DEVELOPMENT = ENVIRONMENT === "development";

/**
 * Is Preview
 */
const IS_PREVIEW = ENVIRONMENT === "preview";

/**
 * Is Production
 */
const IS_PRODUCTION = ENVIRONMENT === "production";

/* ============================================================
   Site Configuration
============================================================ */

export const SITE = Object.freeze({
  NAME: "Blockready",

  BASE_URL:
    import.meta.env.VITE_SITE_URL ??
    "https://offer.blockready.com",

  OFFER_DOMAIN: "offer.blockready.com",

  SUPPORT_EMAIL:
    import.meta.env.VITE_SUPPORT_EMAIL ??
    "support@blockready.com",

  DEFAULT_LANGUAGE: "en",
});

/* ============================================================
   Environment
============================================================ */

export const ENV = Object.freeze({
  MODE: ENVIRONMENT,

  IS_DEVELOPMENT,

  IS_PREVIEW,

  IS_PRODUCTION,
});

/* ============================================================
   Analytics
============================================================ */

export const ANALYTICS = Object.freeze({
  GTM_CONTAINER_ID:
    import.meta.env.VITE_GTM_CONTAINER_ID ??
    "GTM-XXXXXXX",

  DATA_LAYER_NAME: "dataLayer",

  DEBUG: IS_DEVELOPMENT,
});

/* ============================================================
   Tracking Events
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

/* ============================================================
   Consent Configuration
============================================================ */

export const CONSENT = Object.freeze({
  STORAGE_KEY: "br_consent",

  COOKIE_NAME: "br_consent",

  VERSION: "1",

  EXPIRY_DAYS: 180,

  DEFAULT_STATE: "pending",
});

/* ============================================================
   Attribution
============================================================ */

export const ATTRIBUTION = Object.freeze({
  STORAGE_KEY: "br_attribution",

  COOKIE_NAME: "br_attribution",

  EXPIRY_DAYS: 30,

  FIRST_TOUCH_ONLY: true,

  PARAMETERS: Object.freeze([
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "gbraid",
    "wbraid",
    "referrer",
    "landing_page",
  ]),
});

/* ============================================================
   Pricing
============================================================ */

export const PRICING = Object.freeze({
  DEFAULT_CURRENCY: "USD",

  DEFAULT_BILLING_PERIOD: "annual",

  GEO_IP_ENABLED: true,

  SUPPORTED_CURRENCIES: Object.freeze([
    "USD",
    "EUR",
    "GBP",
    "AUD",
    "CAD",
    "NZD",
    "SGD",
    "AED",
  ]),
});

/* ============================================================
   Feature Flags
============================================================ */

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
   Performance
============================================================ */

export const PERFORMANCE = Object.freeze({
  ENABLE_LAZY_LOADING: true,

  ENABLE_IMAGE_DECODING: true,

  ENABLE_PREFETCH: false,

  REDUCED_MOTION_QUERY:
    "(prefers-reduced-motion: reduce)",

  DEFAULT_ANIMATION_DURATION: 300,
});

/* ============================================================
   Default Export
============================================================ */

const CONFIG = Object.freeze({
  SITE,
  ENV,
  ANALYTICS,
  EVENTS,
  CONSENT,
  ATTRIBUTION,
  PRICING,
  FEATURES,
  PERFORMANCE,
});

export default CONFIG;