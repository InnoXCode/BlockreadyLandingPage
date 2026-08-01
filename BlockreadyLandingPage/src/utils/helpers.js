/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Helper Utilities
 * ------------------------------------------------------------
 *
 * Generic reusable helper functions.
 *
 * IMPORTANT
 * - No DOM manipulation
 * - No LocalStorage
 * - No Cookies
 * - No Business Logic
 * - No Tracking
 *
 * These helpers should remain pure whenever possible.
 * ------------------------------------------------------------
 */

/* ============================================================
    Type Helpers
============================================================ */

/**
 * Checks whether a value is an object.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isObject(value) {
  return value !== null &&
    typeof value === "object" &&
    !Array.isArray(value);
}

/**
 * Checks whether a value is a string.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isString(value) {
  return typeof value === "string";
}

/**
 * Checks whether a value is a function.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value) {
  return typeof value === "function";
}

/* ============================================================
    Empty Checks
============================================================ */

/**
 * Checks if a value is empty.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isEmpty(value) {
  if (value == null) return true;

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
}

/* ============================================================
    String Helpers
============================================================ */

/**
 * Capitalizes the first letter.
 *
 * @param {string} value
 * @returns {string}
 */
export function capitalize(value = "") {
  if (!isString(value)) return "";

  if (value.length === 0) return "";

  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * Converts text into URL friendly slug.
 *
 * @param {string} value
 * @returns {string}
 */
export function slugify(value = "") {
  if (!isString(value)) return "";

  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* ============================================================
    Number Helpers
============================================================ */

/**
 * Restricts a number to a range.
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Formats a number using Intl.
 *
 * @param {number} value
 * @param {string} locale
 * @returns {string}
 */
export function formatNumber(
  value,
  locale = "en-US"
) {
  return new Intl.NumberFormat(locale).format(value);
}

/**
 * Formats currency.
 *
 * @param {number} value
 * @param {string} currency
 * @param {string} locale
 * @returns {string}
 */
export function formatCurrency(
  value,
  currency = "USD",
  locale = "en-US"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

/* ============================================================
    Timing Helpers
============================================================ */

/**
 * Debounce.
 *
 * @param {Function} callback
 * @param {number} delay
 * @returns {Function}
 */
export function debounce(callback, delay = 250) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

/**
 * Throttle.
 *
 * @param {Function} callback
 * @param {number} delay
 * @returns {Function}
 */
export function throttle(callback, delay = 250) {
  let waiting = false;

  return (...args) => {
    if (waiting) return;

    callback(...args);

    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}

/**
 * Sleep helper.
 *
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

/* ============================================================
    Browser Helpers
============================================================ */

/**
 * Checks prefers-reduced-motion.
 *
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
}

/**
 * Generates a UUID.
 *
 * @returns {string}
 */
export function generateUUID() {
  return crypto.randomUUID();
}

/**
 * No operation function.
 */
export function noop() {}