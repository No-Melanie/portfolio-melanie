"use client";
import { useEffect } from "react";

export function useMenu() {
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) return;

    const handleMenuClick = () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    };

    menuToggle.addEventListener("click", handleMenuClick);

    const closeOnLinkClick = () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    };
    navLinks.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", closeOnLinkClick)
    );

    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (target && target.startsWith("#")) {
        const element = document.querySelector(target);
        if (element) {
          window.scrollTo({
            top: (element as HTMLElement).offsetTop - 70,
            behavior: "smooth",
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) =>
      anchor.addEventListener("click", handleSmoothScroll)
    );

    return () => {
      menuToggle.removeEventListener("click", handleMenuClick);
      navLinks
        .querySelectorAll("a")
        .forEach((link) =>
          link.removeEventListener("click", closeOnLinkClick)
        );
      document.querySelectorAll('a[href^="#"]').forEach((anchor) =>
        anchor.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);
}
