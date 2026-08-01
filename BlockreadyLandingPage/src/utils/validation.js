/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Validation Utilities
 * ------------------------------------------------------------
 *
 * Generic validation helpers.
 *
 * IMPORTANT
 * - No DOM manipulation
 * - No business logic
 * - No tracking logic
 * - Pure validation functions only
 * ------------------------------------------------------------
 */

/**
 * Checks if a value exists.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function required(value) {
  return value !== null &&
         value !== undefined &&
         String(value).trim() !== "";
}

/**
 * Validates an email address.
 *
 * @param {string} email
 * @returns {boolean}
 */
export function isEmail(email) {
  if (!required(email)) return false;

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validates a URL.
 *
 * @param {string} url
 * @returns {boolean}
 */
export function isUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if a string length is within range.
 *
 * @param {string} value
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export function lengthBetween(
  value,
  min,
  max
) {
  if (!required(value)) return false;

  const length = value.length;

  return length >= min &&
         length <= max;
}

/**
 * Checks if value is numeric.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isNumber(value) {
  return Number.isFinite(Number(value));
}

/**
 * Checks if number is within range.
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export function inRange(
  value,
  min,
  max
) {
  if (!isNumber(value)) {
    return false;
  }

  return value >= min &&
         value <= max;
}

/**
 * Checks if string matches regex.
 *
 * @param {string} value
 * @param {RegExp} regex
 * @returns {boolean}
 */
export function matches(
  value,
  regex
) {
  if (!required(value)) return false;

  return regex.test(value);
}

/**
 * Checks whether a value is one
 * of the allowed values.
 *
 * @param {*} value
 * @param {Array} allowed
 * @returns {boolean}
 */
export function oneOf(
  value,
  allowed
) {
  return allowed.includes(value);
}