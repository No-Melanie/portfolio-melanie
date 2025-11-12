"use client";
import { useScrollEffects } from "./Hooks/use-scroll-effects";
import HeroSection from "../Sections/hero";
import AboutSection from "../Sections/about";
import SkillsSection from "../Sections/skills";


export default function Layout({ children }: { children: React.ReactNode }) {
  useScrollEffects();
  return <main>{children}</main>;
}
