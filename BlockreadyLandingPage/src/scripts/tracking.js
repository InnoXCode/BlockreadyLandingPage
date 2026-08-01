/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Tracking
 * ------------------------------------------------------------
 *
 * Central tracking module.
 *
 * IMPORTANT
 * - Never call gtag()
 * - Never call fbq()
 * - Everything goes through dataLayer.
 * - Consent is required before tracking.
 * ------------------------------------------------------------
 */

import { EVENTS } from "../config/config.js";
import { initAttribution } from "./attribution.js";
import { ANALYTICS, FEATURES } from "../config/config.js";

let trackingEnabled = false;
let gtmLoaded = false;
/**
 * Events allowed on the current page.
 */
let allowedEvents = new Set();

/**
 * Enable tracking after consent.
 */
export function enableTracking() {

  if (trackingEnabled) {
    return;
  }

  trackingEnabled = true;
  initAttribution();
  loadGTM();

  trackEvent(EVENTS.PAGE_VIEW,{

    page_title: document.title,

    page_path: window.location.pathname,

    page_url: window.location.href,

  });

}

/**
 * Returns current tracking state.
 */
export function isTrackingEnabled() {
  return trackingEnabled;
}

/**
 * Disable tracking after consent is withdrawn.
 */
export function disableTracking() {
    trackingEnabled = false;
}

/**
 * Defines which events
 * the current page may emit.
 *
 * @param {string[]} events
 */
export function setEventAllowlist(events = []) {

  allowedEvents = new Set(events);

}

/**
 * Returns the dataLayer.
 */
function getDataLayer() {

  window[ANALYTICS.DATA_LAYER_NAME] =
    window[ANALYTICS.DATA_LAYER_NAME] || [];

  return window[ANALYTICS.DATA_LAYER_NAME];

}

/**
 * Loads Google Tag Manager.
 *
 * Safe to call multiple times.
 * GTM will only be injected once.
 */
function loadGTM() {

  if (gtmLoaded) {
    return;
  }

  if (!ANALYTICS.GTM_CONTAINER_ID) {
    return;
  }

  gtmLoaded = true;

  const dataLayer = getDataLayer();

  dataLayer.push({
    clarity_enabled: FEATURES.CLARITY_ENABLED || false,  // ✅ ADD THIS
  });

  dataLayer.push({

    "gtm.start": Date.now(),

    event: "gtm.js",

  });

  const script = document.createElement("script");

  script.async = true;

  script.src =
    `https://www.googletagmanager.com/gtm.js?id=${ANALYTICS.GTM_CONTAINER_ID}`;

  document.head.appendChild(script);

}

/**
 * Determines whether an event
 * is allowed.
 *
 * @param {string} event
 * @returns {boolean}
 */
function isAllowedEvent(event) {

  return allowedEvents.has(event);

}

/**
 * Push event.
 */
export function trackEvent(
  event,
  payload = {}
) {

  if (!trackingEnabled) {
  return;
}

if (
  typeof event !== "string" ||
  event.trim() === ""
) {

  if (ANALYTICS.DEBUG) {

    console.warn(
      "[Tracking] Event name must be a non-empty string."
    );

  }

  return;

}

if (
  payload === null ||
  typeof payload !== "object" ||
  Array.isArray(payload)
) {

  if (ANALYTICS.DEBUG) {

    console.warn(
      "[Tracking] Payload must be a plain object."
    );

  }

  return;

}

if (!isAllowedEvent(event)) {

  if (ANALYTICS.DEBUG) {

    console.warn(
      `[Tracking] Ignored unsupported event: "${event}"`
    );

  }

  return;

}

  const dataLayer = getDataLayer();

  const eventObject = {

    event,

    experiment_variant: "",

    timestamp: Date.now(),

    ...payload,

  };

  dataLayer.push(eventObject);

  if (ANALYTICS.DEBUG) {
    console.log(eventObject);
  }

}

/**
 * Initialise Tracking
 */
export function initTracking() {

  trackingEnabled = false;
  gtmLoaded = false;
  allowedEvents.clear();

}