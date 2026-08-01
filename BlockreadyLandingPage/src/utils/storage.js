/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Storage Utilities
 * ------------------------------------------------------------
 *
 * Generic wrapper around localStorage.
 *
 * Features
 * - JSON serialization
 * - Safe parsing
 * - Graceful fallback
 * - Error handling
 * - No business logic
 * ------------------------------------------------------------
 */

/* ============================================================
    Availability
============================================================ */

/**
 * Checks whether localStorage is available.
 *
 * @returns {boolean}
 */
export function isStorageAvailable() {
  try {
    const key = "__storage_test__";

    localStorage.setItem(key, key);
    localStorage.removeItem(key);

    return true;
  } catch {
    return false;
  }
}

/* ============================================================
    Set
============================================================ */

/**
 * Stores any value.
 *
 * @param {string} key
 * @param {*} value
 * @returns {boolean}
 */
export function setStorage(key, value) {
  if (!isStorageAvailable()) {
    return false;
  }

  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

    return true;
  } catch (error) {
    console.error(
      "[Storage] Failed to save:",
      error
    );

    return false;
  }
}

/* ============================================================
    Get
============================================================ */

/**
 * Retrieves a value.
 *
 * @param {string} key
 * @param {*} defaultValue
 * @returns {*}
 */
export function getStorage(
  key,
  defaultValue = null
) {
  if (!isStorageAvailable()) {
    return defaultValue;
  }

  try {
    const value = localStorage.getItem(key);

    if (value === null) {
      return defaultValue;
    }

    return JSON.parse(value);
  } catch (error) {
    console.error(
      "[Storage] Failed to read:",
      error
    );

    return defaultValue;
  }
}

/* ============================================================
    Remove
============================================================ */

/**
 * Removes a key.
 *
 * @param {string} key
 */
export function removeStorage(key) {
  if (!isStorageAvailable()) {
    return;
  }

  localStorage.removeItem(key);
}

/* ============================================================
    Clear
============================================================ */

/**
 * Clears all localStorage.
 *
 * Use carefully.
 */
export function clearStorage() {
  if (!isStorageAvailable()) {
    return;
  }

  localStorage.clear();
}

/* ============================================================
    Exists
============================================================ */

/**
 * Checks whether a key exists.
 *
 * @param {string} key
 * @returns {boolean}
 */
export function hasStorage(key) {
  if (!isStorageAvailable()) {
    return false;
  }

  return localStorage.getItem(key) !== null;
}

/* ============================================================
    Keys
============================================================ */

/**
 * Returns all storage keys.
 *
 * @returns {string[]}
 */
export function storageKeys() {
  if (!isStorageAvailable()) {
    return [];
  }

  return Object.keys(localStorage);
}

/* ============================================================
    Length
============================================================ */

/**
 * Number of stored items.
 *
 * @returns {number}
 */
export function storageLength() {
  if (!isStorageAvailable()) {
    return 0;
  }

  return localStorage.length;
}