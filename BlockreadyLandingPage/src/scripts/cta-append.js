/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * CTA Routing
 * ------------------------------------------------------------
 *
 * Handles CTA buttons.
 *
 * Responsibilities
 * - Resolve offer
 * - Track click
 * - Redirect
 *
 * Attribution will be added later.
 * ------------------------------------------------------------
 */


import { appendAttribution } from "./attribution.js";

import { selectAll, on } from "../utils/dom.js";

import { getOfferUrl } from "../config/offers.js";

import { trackEvent } from "./tracking.js";

import { EVENTS } from "../config/config.js";

/**
 * Initialise CTA buttons.
 */
export function initCTA() {

  const buttons = selectAll("[data-cta]");

  if (!buttons.length) {
    return;
  }

  buttons.forEach((button) => {

    on(button, "click", (event) => {

      event.preventDefault();

      const offerId = button.dataset.cta;
      const ctaLocation =
  button.dataset.ctaLocation ||
  "unknown";

      if (!offerId) {
        return;
      }

      const currency = "USD";

     const checkoutUrl =
  getOfferUrl(
    offerId,
    currency
  );

if (!checkoutUrl) {

  console.warn(
    `Offer "${offerId}" not found.`
  );

  return;

}

const url =
  appendAttribution(
    checkoutUrl
  );

     const payload = { 
  cta: offerId, 
  cta_location: ctaLocation, 
  experiment_variant: '' 
};

// Use the same payload for both events
trackEvent(EVENTS.CHECKOUT_CLICK, payload);
trackEvent(EVENTS.CTA_CLICK, payload);

      if (import.meta.env.DEV) {

  console.log(window.dataLayer);

}

//window.location.assign(url);
    });

  });

}
