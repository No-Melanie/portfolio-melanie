"use client";
import { useScrollEffects } from "./Hooks/use-scroll-effects";
import HeroSection from "../Sections/hero";
import AboutSection from "../Sections/about";
import SkillsSection from "../Sections/skills";


export default function Portfolio({ }: { children: React.ReactNode }) {
  useScrollEffects();
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
      </main>
    </div>
  );
}
