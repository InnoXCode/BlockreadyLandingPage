/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Cookie Utilities
 * ------------------------------------------------------------
 *
 * Generic cookie helper functions.
 *
 * IMPORTANT
 * - No business logic
 * - No consent logic
 * - No tracking logic
 * - No application-specific cookies
 *
 * Generic cookie operations only.
 * ------------------------------------------------------------
 */

/* ============================================================
    Set Cookie
============================================================ */

/**
 * Sets a cookie.
 *
 * @param {string} name
 * @param {string} value
 * @param {number} days
 * @param {Object} [options={}]
 */
export function setCookie(
  name,
  value,
  days = 30,
  options = {}
) {
  if (!name) return;

  const expires = new Date();

  expires.setTime(
    expires.getTime() + days * 24 * 60 * 60 * 1000
  );

  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}`;

  cookie += `; expires=${expires.toUTCString()}`;
  cookie += "; path=/";

  cookie += `; SameSite=${options.sameSite ?? "Lax"}`;

  if (options.secure ?? location.protocol === "https:") {
    cookie += "; Secure";
  }

  if (options.domain) {
    cookie += `; domain=${options.domain}`;
  }

  document.cookie = cookie;
}

/* ============================================================
    Get Cookie
============================================================ */

/**
 * Gets a cookie value.
 *
 * @param {string} name
 * @returns {string|null}
 */
export function getCookie(name) {
  if (!name) return null;

  const encodedName = encodeURIComponent(name) + "=";

  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const trimmed = cookie.trim();

    if (trimmed.startsWith(encodedName)) {
      return decodeURIComponent(
        trimmed.substring(encodedName.length)
      );
    }
  }

  return null;
}

/* ============================================================
    Cookie Exists
============================================================ */

/**
 * Checks if a cookie exists.
 *
 * @param {string} name
 * @returns {boolean}
 */
export function hasCookie(name) {
  return getCookie(name) !== null;
}

/* ============================================================
    Delete Cookie
============================================================ */

/**
 * Deletes a cookie.
 *
 * @param {string} name
 */
export function deleteCookie(name) {
  if (!name) return;

  document.cookie =
    `${encodeURIComponent(name)}=` +
    "; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
    "; path=/";
}

/* ============================================================
    Get All Cookies
============================================================ */

/**
 * Returns all cookies as an object.
 *
 * @returns {Object}
 */
export function getAllCookies() {
  const result = {};

  if (!document.cookie) {
    return result;
  }

  document.cookie
    .split(";")
    .forEach((cookie) => {
      const [name, ...value] = cookie.trim().split("=");

      result[decodeURIComponent(name)] =
        decodeURIComponent(value.join("="));
    });

  return result;
}

/* ============================================================
    Clear All Cookies
============================================================ */

/**
 * Removes all cookies
 * accessible from the current path.
 */
export function clearCookies() {
  const cookies = document.cookie.split(";");

  cookies.forEach((cookie) => {
    const name = cookie.split("=")[0].trim();

    deleteCookie(name);
  });
}