/**
 * ------------------------------------------------------------
 * Blockready Landing Page System
 * Navigation
 * ------------------------------------------------------------
 *
 * Handles:
 * - Mobile menu
 * - Navbar scroll state
 * - Accessibility
 * ------------------------------------------------------------
 */

import {
  select,
  on,
  removeClass,
  toggleClass
} from "../utils/dom.js";

/**
 * Initialise navigation.
 */
export function initNavigation() {
  const navbar = select(".br-navbar");
  const menuToggle = select("#menuToggle");
  const navLinks = select("#navLinks");

  if (!navbar || !menuToggle || !navLinks) {
    return;
  }

  /**
   * Toggle mobile menu.
   */
  function toggleMenu() {
    const isOpen =
      navLinks.classList.contains("open");

    toggleClass(navLinks, "open");
    toggleClass(menuToggle, "open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );
  }

  /**
   * Close mobile menu.
   */
  function closeMenu() {
  removeClass(navLinks, "open");
  removeClass(menuToggle, "open");

  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  menuToggle.focus();
}

  /**
   * Navbar shadow on scroll.
   */
  function updateNavbar() {
    navbar.classList.toggle(
      "scrolled",
      window.scrollY > 10
    );
  }

  /* -----------------------------
      Events
  ------------------------------ */

  on(menuToggle, "click", toggleMenu);

  on(window, "scroll", updateNavbar);

  navLinks
    .querySelectorAll("a")
    .forEach((link) => {
      on(link, "click", closeMenu);
    });

  on(document, "click", (event) => {
    if (
      !navbar.contains(event.target)
    ) {
      closeMenu();
    }
  });

  on(document, "keydown", (event) => {
  if (
    event.key === "Escape" &&
    navLinks.classList.contains("open")
  ) {
    closeMenu();
  }
});

  updateNavbar();
}