"use client";
import { useMenu } from "../Hooks/use-menu";

export function Header() {
  useMenu();
  return (
    <header className="fixed top-0 w-full bg-white z-50">
        <nav>
          <a href="#" className="logo">
            <i className="fas fa-water"></i>
            Alex Chen
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
    </header>
  );
}
