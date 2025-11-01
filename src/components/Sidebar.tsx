"use client";

import { useState, useEffect } from "react";
import { FiHome, FiBriefcase, FiCode, FiMail, FiUser } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home", icon: FiHome },
  { id: "about", label: "About", icon: FiUser },
  { id: "projects", label: "Projects", icon: FiCode },
  { id: "experience", label: "Experience", icon: FiBriefcase },
  { id: "contact", label: "Contact", icon: FiMail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="from-darkAccent via-darkAccent to-mutedAccent fixed top-0 left-0 z-50 flex h-screen w-20 flex-col items-center justify-center bg-gradient-to-b shadow-2xl lg:w-24">
      {/* Decorative elements */}
      <div className="from-mutedAccent/20 pointer-events-none absolute top-0 left-0 h-32 w-full bg-gradient-to-b to-transparent"></div>
      <div className="from-mutedAccent/20 pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t to-transparent"></div>

      <nav className="relative z-10 flex flex-col gap-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex flex-col items-center justify-center transition-all duration-300 ${
                isActive
                  ? "text-lightAccent scale-110"
                  : "text-background hover:text-lightAccent hover:scale-110"
              }`}
              aria-label={item.label}
            >
              <div
                className={`rounded-xl p-3 transition-all duration-300 ${
                  isActive
                    ? "bg-lightAccent/20 shadow-lightAccent/50 shadow-lg"
                    : "hover:bg-background/10"
                }`}
              >
                <Icon className="text-2xl lg:text-3xl" />
              </div>

              {/* Tooltip */}
              <span className="from-mutedAccent to-darkAccent text-background pointer-events-none absolute left-full ml-6 rounded-lg bg-gradient-to-r px-4 py-2 text-sm whitespace-nowrap opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                {item.label}
                <div className="bg-mutedAccent absolute top-1/2 left-0 h-2 w-2 -translate-x-1 -translate-y-1/2 rotate-45"></div>
              </span>

              {/* Active indicator */}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
