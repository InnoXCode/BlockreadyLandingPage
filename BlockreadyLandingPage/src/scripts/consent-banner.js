/**
 * ------------------------------------------------------------
 * Consent Banner
 * ------------------------------------------------------------
 */

import { CONSENT } from "../config/config.js";

import {
  getCookie,
  setCookie,
  deleteCookie,
} from "../utils/cookies.js";

import { getStorage, setStorage } from "../utils/storage.js"; 

import {
  select,
  on,
  hide,
  show,
} from "../utils/dom.js";

import {
  enableTracking,
  disableTracking,
} from "./tracking.js";


/**
 * Read consent from localStorage + cookie fallback
 */
function readConsent() {
  // Try localStorage first
  const stored = getStorage(CONSENT.STORAGE_KEY);
  if (stored && stored.choice) {
    return stored.choice;
  }
  
  // Fallback to cookie
  return getCookie(CONSENT.COOKIE_NAME);
}

/**
 * Write consent to localStorage + cookie
 */
function writeConsent(choice) {
  const record = {
    choice: choice,
    decided_at: Date.now(),
  };
  
  // Write to localStorage
  setStorage(CONSENT.STORAGE_KEY, record);
  
  // Also write to cookie as fallback
  setCookie(CONSENT.COOKIE_NAME, choice, CONSENT.EXPIRY_DAYS);
}

export function initConsentBanner() {

  const banner = select("#br-consent-banner");

  if (!banner) return;

  const accept = select("#br-consent-accept");

  const reject = select("#br-consent-reject");

  //const preferences =
  //select("#br-cookie-preferences");
  //console.log("Cookie Preferences:", preferences);

  //if (preferences) {

  //on(preferences, "click", (event) => {

    //event.preventDefault();


    //show(banner);
    //accept.focus();

 // });

//}

// ✅ Accept button - writes to BOTH localStorage AND cookie
  on(accept, "click", () => {
    writeConsent("accepted");
    hide(banner);
    enableTracking();  // This now captures attribution
  });

  // ✅ Reject button - writes to BOTH localStorage AND cookie
  on(reject, "click", () => {
    writeConsent("rejected");
    disableTracking();
    hide(banner);
  });

  // ✅ Check existing consent - reads from localStorage OR cookie
  const consent = readConsent();

  /*
  -----------------------------------------
  Consent already accepted
  -----------------------------------------
  */

  if (consent === "accepted") {

    hide(banner);

    enableTracking();

    return;

  }

  /*
  -----------------------------------------
  Consent already rejected
  -----------------------------------------
  */

  if (consent === "rejected") {

    hide(banner);

    return;

  }

  /*
  -----------------------------------------
  First visit
  -----------------------------------------
  */

  show(banner);
  //accept.focus();//

}
  /**
 * Reopen consent banner (for footer link)

export function reopenConsentBanner() {
  const banner = select("#br-consent-banner");
  const accept = select("#br-consent-accept");
  if (!banner || !accept) return;
  
  show(banner);
  accept.focus();
} */