/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * DOM Utilities
 * ------------------------------------------------------------
 *
 * Generic DOM helper functions.
 *
 * IMPORTANT
 * - No business logic
 * - No tracking
 * - No pricing logic
 * - No component-specific code
 *
 * Pure DOM helpers only.
 * ------------------------------------------------------------
 */

/* ============================================================
    Selectors
============================================================ */

/**
 * Returns the first matching element.
 *
 * @param {string} selector
 * @param {ParentNode} [parent=document]
 * @returns {Element|null}
 */
export function select(selector, parent = document) {
  return parent.querySelector(selector);
}

/**
 * Returns all matching elements.
 *
 * @param {string} selector
 * @param {ParentNode} [parent=document]
 * @returns {Element[]}
 */
export function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

/* ============================================================
    Existence
============================================================ */

/**
 * Checks if an element exists.
 *
 * @param {Element|null} element
 * @returns {boolean}
 */
export function exists(element) {
  return element instanceof Element;
}

/* ============================================================
    Classes
============================================================ */

/**
 * Adds class(es).
 *
 * @param {Element} element
 * @param {...string} classes
 */
export function addClass(element, ...classes) {
  if (!exists(element)) return;

  element.classList.add(...classes);
}

/**
 * Removes class(es).
 *
 * @param {Element} element
 * @param {...string} classes
 */
export function removeClass(element, ...classes) {
  if (!exists(element)) return;

  element.classList.remove(...classes);
}

/**
 * Toggles a class.
 *
 * @param {Element} element
 * @param {string} className
 * @param {boolean} [force]
 */
export function toggleClass(
  element,
  className,
  force
) {
  if (!exists(element)) return;

  element.classList.toggle(className, force);
}

/**
 * Checks if an element has a class.
 *
 * @param {Element} element
 * @param {string} className
 * @returns {boolean}
 */
export function hasClass(element, className) {
  if (!exists(element)) return false;

  return element.classList.contains(className);
}

/* ============================================================
    Attributes
============================================================ */

/**
 * Gets an attribute.
 *
 * @param {Element} element
 * @param {string} attribute
 * @returns {string|null}
 */
export function getAttribute(
  element,
  attribute
) {
  if (!exists(element)) return null;

  return element.getAttribute(attribute);
}

/**
 * Sets an attribute.
 *
 * @param {Element} element
 * @param {string} attribute
 * @param {string} value
 */
export function setAttribute(
  element,
  attribute,
  value
) {
  if (!exists(element)) return;

  element.setAttribute(attribute, value);
}

/**
 * Removes an attribute.
 *
 * @param {Element} element
 * @param {string} attribute
 */
export function removeAttribute(
  element,
  attribute
) {
  if (!exists(element)) return;

  element.removeAttribute(attribute);
}

/* ============================================================
    Events
============================================================ */

/**
 * Adds an event listener.
 *
 * @param {EventTarget} target
 * @param {string} event
 * @param {Function} callback
 * @param {AddEventListenerOptions|boolean} [options]
 */
export function on(
  target,
  event,
  callback,
  options = false
) {
  if (!target) return;

  target.addEventListener(
    event,
    callback,
    options
  );
}

/**
 * Removes an event listener.
 *
 * @param {EventTarget} target
 * @param {string} event
 * @param {Function} callback
 * @param {EventListenerOptions|boolean} [options]
 */
export function off(
  target,
  event,
  callback,
  options = false
) {
  if (!target) return;

  target.removeEventListener(
    event,
    callback,
    options
  );
}

/**
 * Event delegation helper.
 *
 * @param {Element|Document} parent
 * @param {string} event
 * @param {string} selector
 * @param {Function} callback
 */
export function delegate(
  parent,
  event,
  selector,
  callback
) {
  on(parent, event, (e) => {
    const target = e.target.closest(selector);

    if (!target) return;

    callback(e, target);
  });
}

/* ============================================================
    Content
============================================================ */

/**
 * Sets text content.
 *
 * @param {Element} element
 * @param {string} text
 */
export function setText(
  element,
  text
) {
  if (!exists(element)) return;

  element.textContent = text;
}

/**
 * Sets HTML.
 *
 * @param {Element} element
 * @param {string} html
 */
export function setHTML(
  element,
  html
) {
  if (!exists(element)) return;

  element.innerHTML = html;
}

/* ============================================================
    Visibility
============================================================ */

/**
 * Shows an element.
 *
 * @param {HTMLElement} element
 */
export function show(element) {
  if (!exists(element)) return;

  element.hidden = false;
}

/**
 * Hides an element.
 *
 * @param {HTMLElement} element
 */
export function hide(element) {
  if (!exists(element)) return;

  element.hidden = true;
}

/**
 * Toggles visibility.
 *
 * @param {HTMLElement} element
 * @param {boolean} visible
 */
export function toggleVisibility(
  element,
  visible
) {
  if (!exists(element)) return;

  element.hidden = !visible;
}

/* ============================================================
    Create
============================================================ */

/**
 * Creates a DOM element.
 *
 * @param {string} tag
 * @param {Object} [attributes={}]
 * @returns {HTMLElement}
 */
export function createElement(
  tag,
  attributes = {}
) {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach(
    ([key, value]) => {
      if (key === "text") {
        element.textContent = value;
        return;
      }

      if (key === "html") {
        element.innerHTML = value;
        return;
      }

      element.setAttribute(key, value);
    }
  );

  return element;
}

/* ============================================================
    DOM Ready
============================================================ */

/**
 * Executes callback when DOM is ready.
 *
 * @param {Function} callback
 */
export function ready(callback) {
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      callback,
      { once: true }
    );

    return;
  }

  callback();
}