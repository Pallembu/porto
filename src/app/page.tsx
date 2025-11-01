"use client";

import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <div className="ml-20 lg:ml-24">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
