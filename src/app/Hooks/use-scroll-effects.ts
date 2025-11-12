"use client";
import { useEffect } from "react";

export function useScrollEffects() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.style.boxShadow =
          window.scrollY > 100
            ? "0 5px 15px rgba(0, 0, 0, 0.3)"
            : "none";
      }

      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
