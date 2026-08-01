/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Attribution
 * ------------------------------------------------------------
 *
 * Responsibilities
 * - Capture UTM parameters
 * - Capture Google click IDs
 * - Capture referrer
 * - Store first-touch attribution
 * - Append attribution to checkout URLs
 * ------------------------------------------------------------
 */

import { ATTRIBUTION } from "../config/config.js";

import {
  getStorage,
  setStorage,
} from "../utils/storage.js";

import { getCookie, setCookie } from "../utils/cookies.js";

/**
 * Read attribution from cookie (fallback)
 */
function getAttributionFromCookie() {
  const cookie = getCookie(ATTRIBUTION.COOKIE_NAME);
  if (!cookie) return null;
  try {
    return JSON.parse(decodeURIComponent(cookie));
  } catch {
    return null;
  }
}

/**
 * Write attribution to cookie (fallback)
 */
function setAttributionCookie(attribution) {
  const value = encodeURIComponent(JSON.stringify(attribution));
  setCookie(ATTRIBUTION.COOKIE_NAME, value, ATTRIBUTION.EXPIRY_DAYS);
}

/**
 * Read persisted attribution (localStorage + cookie fallback)
 */
function readPersistedAttribution() {
  // Try localStorage first
  const stored = getStorage(ATTRIBUTION.STORAGE_KEY);
  if (stored) return stored;
  
  // Fallback to cookie
  return getAttributionFromCookie();
}

/**
 * Persist attribution (localStorage + cookie fallback)
 */
function persistAttribution(attribution) {
  // Write to localStorage
  setStorage(ATTRIBUTION.STORAGE_KEY, attribution);
  
  // Also write to cookie as fallback
  setAttributionCookie(attribution);
}

/**
 * Capture attribution from URL.
 */
export function initAttribution() {
  console.log("[Attribution] initAttribution called");

  const existing =
    getStorage(ATTRIBUTION.STORAGE_KEY);

    console.log("Existing attribution:", existing);

if (existing) {

    const age =
        Date.now() - existing.captured_at;

    const expiry =
        ATTRIBUTION.EXPIRY_DAYS *
        24 *
        60 *
        60 *
        1000;

    if (age < expiry) {
        return;
    }

}

  const params = new URLSearchParams(
    window.location.search
  );

  const attribution = {};

  ATTRIBUTION.PARAMETERS.forEach((parameter) => {

  switch (parameter) {

    case "referrer":

      attribution.referrer =
        document.referrer || "";

      break;

    case "landing_page":

      attribution.landing_page =
        window.location.href;

      break;

    default:

      attribution[parameter] =
        params.get(parameter);

  }

});

// ✅ FIX: Check if there's any meaningful attribution data
const hasAttribution = Object.keys(attribution).some(key => {
  // Skip internal fields
  if (key === 'captured_at') return false;
  const val = attribution[key];
  return val !== null && val !== undefined && val !== "";
});

if (!hasAttribution) {
  console.log("[Attribution] No attribution data found - not storing");
  return;  // Don't store empty attribution
}

attribution.captured_at = Date.now();
console.log("[Attribution] Storing attribution:", attribution);
setStorage(ATTRIBUTION.STORAGE_KEY, attribution);

}

/**
 * Returns stored attribution.
  */
export function getAttribution() {
  return readPersistedAttribution() || {};
}

/**
 * Append attribution parameters.
 */
export function appendAttribution(url) {

  const attribution =
    getAttribution();

  const destination =
    new URL(url);

   Object.entries(attribution).forEach(([key, value]) => {
    if (key === 'captured_at') return;
    if (value !== null && value !== undefined && value !== "") {
      destination.searchParams.set(key, value);
    }
  });

  return destination.toString();

}