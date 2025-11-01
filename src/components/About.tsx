"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiLayers,
  FiZap,
  FiShield,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id: 1,
    icon: FiCode,
    name: "Frontend Development",
    description: "Next.js, React, TailwindCSS",
    level: 90,
  },
  {
    id: 2,
    icon: FiLayers,
    name: "CMS Integration",
    description: "Sanity, Headless CMS",
    level: 85,
  },
  {
    id: 3,
    icon: FiServer,
    name: "Server Administration",
    description: "Ubuntu Server, OpenVPN",
    level: 88,
  },
  {
    id: 4,
    icon: FiDatabase,
    name: "Network Management",
    description: "MikroTik, UniFi, Cisco",
    level: 92,
  },
  {
    id: 5,
    icon: FiZap,
    name: "Performance Optimization",
    description: "SSR, SSG, SEO",
    level: 87,
  },
  {
    id: 6,
    icon: FiShield,
    name: "IT Support",
    description: "Hardware, Troubleshooting",
    level: 95,
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Animate content
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      // Animate skill cards
      skillsRef.current.forEach((skill, index) => {
        if (skill) {
          gsap.from(skill, {
            scrollTrigger: {
              trigger: skill,
              start: "top 85%",
            },
            opacity: 0,
            y: 100,
            rotation: 5,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)",
          });

          // Animate progress bars
          const progressBar = skill.querySelector(".progress-bar");
          if (progressBar) {
            gsap.from(progressBar, {
              scrollTrigger: {
                trigger: skill,
                start: "top 85%",
              },
              width: 0,
              duration: 1.5,
              delay: 0.5 + index * 0.1,
              ease: "power3.out",
            });
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center px-6 py-20 lg:px-20"
    >
      <div className="w-full max-w-6xl">
        <h2
          ref={titleRef}
          className="text-darkAccent mb-8 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          About Me
        </h2>

        <div ref={contentRef} className="mx-auto mb-16 max-w-4xl">
          <div className="border-mutedAccent rounded-2xl border-4 bg-white/50 p-8 shadow-2xl backdrop-blur-sm">
            <p className="text-darkAccent mb-6 text-lg leading-relaxed md:text-xl">
              I&apos;m a passionate technologist who bridges the gap between{" "}
              <span className="text-mutedAccent font-bold">infrastructure</span>{" "}
              and{" "}
              <span className="text-mutedAccent font-bold">
                application development
              </span>
              . My journey started in IT support, where I spent over 3 years
              managing complex network infrastructures, configuring
              enterprise-grade equipment, and ensuring seamless operations for
              30+ workstations.
            </p>
            <p className="text-darkAccent text-lg leading-relaxed md:text-xl">
              Today, I channel that technical foundation into building{" "}
              <span className="text-mutedAccent font-bold">
                high-performance web applications
              </span>
              . I specialize in creating lightning-fast landing pages with
              Next.js, implementing scalable CMS solutions, and obsessing over
              every detail from SEO optimization to deployment automation. My
              unique background gives me a holistic view of technology—from the
              server room to the user&apos;s screen.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                ref={(el) => {
                  skillsRef.current[index] = el;
                }}
                className="group border-mutedAccent hover:border-lightAccent relative overflow-hidden rounded-xl border-2 bg-white/40 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Gradient overlay on hover */}
                <div className="from-mutedAccent/10 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="bg-mutedAccent rounded-lg p-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <Icon className="text-background text-2xl" />
                    </div>
                    <h3 className="text-darkAccent text-lg font-bold">
                      {skill.name}
                    </h3>
                  </div>

                  <p className="text-mutedAccent mb-4 text-sm">
                    {skill.description}
                  </p>

                  {/* Progress bar */}
                  <div className="bg-background relative h-2 overflow-hidden rounded-full">
                    <div
                      className="progress-bar from-mutedAccent to-darkAccent absolute top-0 left-0 h-full rounded-full bg-gradient-to-r"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-mutedAccent mt-1 text-right text-xs font-semibold">
                    {skill.level}%
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="bg-lightAccent/20 absolute top-0 right-0 h-20 w-20 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
