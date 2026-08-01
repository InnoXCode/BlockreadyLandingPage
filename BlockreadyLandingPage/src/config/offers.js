/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Offer Configuration
 * ------------------------------------------------------------
 *
 * Single source of truth for all CTA destinations.
 *
 * IMPORTANT
 * - Never hardcode offer URLs anywhere else.
 * - Pricing components MUST use this file.
 * - CTA buttons resolve destinations from here.
 * ------------------------------------------------------------
 */

/* ============================================================
   Billing Periods
============================================================ */

export const BILLING = Object.freeze({
  ANNUAL: "annual",
  LIFETIME: "lifetime",
});

/* ============================================================
   Supported Currencies
============================================================ */

export const CURRENCY = Object.freeze({
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
   Offer Definitions
============================================================ */

export const OFFERS = Object.freeze({
  pro: Object.freeze({
    id: "pro",
    name: "Blockready Pro",

    billing: BILLING.ANNUAL,

    urls: Object.freeze({
      USD: "https://checkout.blockready.com/pro-usd",
      EUR: "https://checkout.blockready.com/pro-eur",
      GBP: "https://checkout.blockready.com/pro-gbp",
      AUD: "https://checkout.blockready.com/pro-aud",
      CAD: "https://checkout.blockready.com/pro-cad",
      NZD: "https://checkout.blockready.com/pro-nzd",
      SGD: "https://checkout.blockready.com/pro-sgd",
      AED: "https://checkout.blockready.com/pro-aed",
    }),
  }),

  expert: Object.freeze({
    id: "expert",
    name: "Blockready Expert",

    billing: BILLING.ANNUAL,

    urls: Object.freeze({
      USD: "https://checkout.blockready.com/expert-usd",
      EUR: "https://checkout.blockready.com/expert-eur",
      GBP: "https://checkout.blockready.com/expert-gbp",
      AUD: "https://checkout.blockready.com/expert-aud",
      CAD: "https://checkout.blockready.com/expert-cad",
      NZD: "https://checkout.blockready.com/expert-nzd",
      SGD: "https://checkout.blockready.com/expert-sgd",
      AED: "https://checkout.blockready.com/expert-aed",
    }),
  }),

  expertLifetime: Object.freeze({
    id: "expertLifetime",
    name: "Blockready Expert Lifetime",

    billing: BILLING.LIFETIME,

    urls: Object.freeze({
      USD: "https://checkout.blockready.com/lifetime-usd",
      EUR: "https://checkout.blockready.com/lifetime-eur",
      GBP: "https://checkout.blockready.com/lifetime-gbp",
      AUD: "https://checkout.blockready.com/lifetime-aud",
      CAD: "https://checkout.blockready.com/lifetime-cad",
      NZD: "https://checkout.blockready.com/lifetime-nzd",
      SGD: "https://checkout.blockready.com/lifetime-sgd",
      AED: "https://checkout.blockready.com/lifetime-aed",
    }),
  }),

  bookCall: Object.freeze({
    id: "bookCall",
    name: "Enterprise Discovery Call",

    url: "https://calendly.com/blockready/discovery-call",
  }),
});

export const CHECKOUT_EVENT_OVERRIDES = {
  bookCall: 'booking_click',
};

/* ============================================================
   Helper Functions
============================================================ */

/**
 * Returns an offer by ID.
 *
 * @param {string} offerId
 * @returns {object|null}
 */
export function getOffer(offerId) {
  return OFFERS[offerId] ?? null;
}

/**
 * Returns the checkout URL for an offer and currency.
 *
 * Falls back to USD if the requested currency
 * does not exist.
 *
 * @param {string} offerId
 * @param {string} currency
 * @returns {string|null}
 */
export function getOfferUrl(
  offerId,
  currency = "USD"
) {
  const offer = getOffer(offerId);

  if (!offer) {
    return null;
  }

  if (offer.url) {
    return offer.url;
  }

  return (
    offer.urls[currency] ??
    offer.urls.USD ??
    null
  );
}

/**
 * Determines whether an offer exists.
 *
 * @param {string} offerId
 * @returns {boolean}
 */
export function offerExists(offerId) {
  return Boolean(OFFERS[offerId]);
}

export default OFFERS;