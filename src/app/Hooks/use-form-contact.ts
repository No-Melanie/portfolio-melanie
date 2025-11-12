"use client";
import { useEffect } from "react";

export function useContactForm() {
  useEffect(() => {
    const contactForm = document.querySelector(".contact-form");
    if (!contactForm) return;

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const name = (document.getElementById("name") as HTMLInputElement)?.value;
      alert(`Obrigada pela sua mensagem, ${name}! 💌`);
      (contactForm as HTMLFormElement).reset();
    };

    contactForm.addEventListener("submit", handleSubmit);
    return () => contactForm.removeEventListener("submit", handleSubmit);
  }, []);
}
