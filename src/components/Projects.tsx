"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Mahabbatussholihin Tour & Travel",
    description:
      "A comprehensive tour and travel website built with Next.js featuring responsive design, seamless booking flow, and integrated CMS for easy content management. Includes tour packages, testimonials, and real-time availability checking.",
    technologies: ["Next.js", "Sanity CMS", "TailwindCSS", "Vercel"],
    link: "#",
    image: "/projects/mahabbatussholihin.jpg", // Add your project screenshot here
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Animate project cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            opacity: 0,
            y: 100,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center px-6 py-20 lg:px-20"
    >
      <div className="w-full max-w-6xl">
        <h2
          ref={titleRef}
          className="text-darkAccent mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          Featured Projects
        </h2>
        <p className="text-mutedAccent mx-auto mb-16 max-w-2xl text-center text-lg">
          Showcasing my expertise in building modern, high-performance web
          solutions
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
            >
              {/* Project Image - Left Side */}
              <div className="border-mutedAccent group relative h-64 overflow-hidden rounded-2xl border-2 transition-all duration-500 hover:shadow-2xl md:h-80 lg:h-96">
                <Image
                  src="/projects/placeholder.svg"
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay on hover */}
                <div className="from-darkAccent/60 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Info overlay */}
                <div className="bg-background/90 absolute bottom-4 left-4 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <p className="text-mutedAccent text-xs font-semibold">
                    Replace with your actual screenshot
                  </p>
                </div>
              </div>

              {/* Project Info - Right Side */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-darkAccent mb-4 text-3xl font-bold md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="text-darkAccent mb-6 text-base leading-relaxed md:text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Used */}
                <div>
                  <p className="text-mutedAccent mb-3 text-sm font-semibold tracking-wider uppercase">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-lightAccent/40 text-darkAccent border-mutedAccent/30 rounded-lg border px-4 py-2 text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-mutedAccent text-background hover:bg-darkAccent inline-flex transform items-center gap-2 rounded-lg px-6 py-3 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <FiExternalLink className="text-lg" />
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
