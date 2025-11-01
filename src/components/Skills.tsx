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
  },
  {
    id: 2,
    icon: FiLayers,
    name: "CMS Integration",
    description: "Sanity, Headless CMS",
  },
  {
    id: 3,
    icon: FiServer,
    name: "Server Administration",
    description: "Ubuntu Server, OpenVPN",
  },
  {
    id: 4,
    icon: FiDatabase,
    name: "Network Management",
    description: "MikroTik, UniFi, Cisco",
  },
  {
    id: 5,
    icon: FiZap,
    name: "Performance Optimization",
    description: "SSR, SSG, SEO",
  },
  {
    id: 6,
    icon: FiShield,
    name: "IT Support",
    description: "Hardware, Troubleshooting",
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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
        y: 50,
        duration: 0.8,
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
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
          });
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

        {/* About Me Content */}
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="border-mutedAccent rounded-2xl border-2 bg-white/40 p-8 shadow-xl backdrop-blur-md md:p-10">
            <p className="text-darkAccent mb-6 text-base leading-relaxed md:text-lg">
              I&apos;m someone who can easily enter a state of deep focus,
              whether I&apos;m troubleshooting a technical issue or simply
              immersed in a project.
            </p>

            <p className="text-darkAccent mb-6 text-base leading-relaxed md:text-lg">
              My hobbies reflect this balance of engagement and thought: I
              listen to music (across all genres and languages), play strategic
              games like chess, and read. I also value quiet moments—allowing my
              mind to process, reflect, and wander.
            </p>

            <p className="text-darkAccent text-base leading-relaxed md:text-lg">
              I strongly identify with the principle from philosopher René
              Descartes,{" "}
              <span className="text-mutedAccent font-semibold italic">
                &quot;Cogito, ergo sum&quot;
              </span>{" "}
              <span className="text-mutedAccent">
                (&apos;I think, therefore I am&apos;)
              </span>
              . It defines my core approach: I am a logical and highly objective
              person who believes in the power of structured thinking to
              navigate any situation.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <h3 className="text-darkAccent mb-6 text-center text-3xl font-bold md:text-4xl">
          Skills & Expertise
        </h3>

        <p className="text-mutedAccent mx-auto mb-12 max-w-2xl text-center text-lg">
          Technical skills and tools I work with on a daily basis
        </p>

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
                className="group border-mutedAccent relative overflow-hidden rounded-2xl border-2 bg-white/40 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Gradient overlay on hover */}
                <div className="from-mutedAccent/10 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="bg-mutedAccent flex-shrink-0 rounded-xl p-4 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="text-background text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-darkAccent group-hover:text-mutedAccent text-lg font-bold transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-mutedAccent mt-2 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
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
