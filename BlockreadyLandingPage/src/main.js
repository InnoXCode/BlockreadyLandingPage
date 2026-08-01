/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Main Application Entry
 * ------------------------------------------------------------
 *
 * Bootstraps the application.
 * ------------------------------------------------------------
 */

import { ready } from "./utils/dom.js";

import { initNavigation } from "./scripts/navigation.js";
import { initTracking, setEventAllowlist, } from "./scripts/tracking.js";
import { initCTA } from "./scripts/cta-append.js";
import { initConsentBanner } from "./scripts/consent-banner.js";
import { initTestimonials } from "./sections/testimonials.js";
import { initFAQ } from "./sections/faq.js";


function initApp() {

  initNavigation();


  initTracking();

  setEventAllowlist([
  "page_view",
  "cta_click",
  "checkout_click",
]);

  initConsentBanner();



  initCTA();


initTestimonials();

  console.log("FAQ initialized");
  initFAQ();

}


ready(initApp);