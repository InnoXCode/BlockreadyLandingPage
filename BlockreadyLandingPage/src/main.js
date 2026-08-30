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
import { initAttribution } from "./scripts/attribution.js";
import { initTestimonials } from "./sections/testimonials.js";
import { initFAQ } from "./sections/faq.js";

import { ANALYTICS } from "../config/config.js";

function initApp() {
  console.log("=== GTM DEBUG ===");
  console.log("GTM ID from config:", ANALYTICS.GTM_CONTAINER_ID);
  console.log("GTM ID from env:", import.meta.env.VITE_GTM_CONTAINER_ID);
  
  // Verify the ID is valid
  if (ANALYTICS.GTM_CONTAINER_ID === "GTM-XXXXXXX") {
    console.error("❌ GTM ID is still placeholder!");
    console.error("VITE_GTM_CONTAINER_ID env var value:", import.meta.env.VITE_GTM_CONTAINER_ID);
    console.error("This means your Cloudflare env var isn't being injected correctly.");
    
    // Force hardcode for production as fallback
    if (import.meta.env.MODE === "production") {
      console.log("⚠️ Using hardcoded fallback for production");
      // Replace with your REAL GTM ID
      window.GTM_ID = "GTM-YOUR-REAL-ID-HERE";
      ANALYTICS.GTM_CONTAINER_ID = window.GTM_ID;
    }
  }
  

function initApp() {

  initNavigation();


  initTracking();

  setEventAllowlist([
  "page_view",
  "cta_click",
  "checkout_click",
]);

  initConsentBanner();

  initAttribution();

  initCTA();


initTestimonials();

  console.log("FAQ initialized");
  initFAQ();

}


ready(initApp);
}
