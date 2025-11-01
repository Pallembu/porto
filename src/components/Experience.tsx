"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    role: "Web Builder & Development Freelance",
    company: "Pashart",
    period: "Aug 2025 - Present",
    description:
      "Developing high-performance landing pages and portfolios using Next.js (SSR & SSG) for optimal SEO, TailwindCSS for scalable components, and Sanity for a client-friendly CMS. Deployed via Vercel for continuous deployment.",
    current: true,
  },
  {
    id: 2,
    role: "IT Support & Technician",
    company: "Hascar Auto Services",
    period: "Oct 2022 - Oct 2025",
    description:
      "Managed 30+ PCs, configured MikroTik/UniFi/Cisco devices, and set up Ubuntu Server for OpenVPN.",
    current: false,
  },
  {
    id: 3,
    role: "Customer Service & Technician",
    company: "RZL Games",
    period: "Sep 2021 - Aug 2022",
    description:
      "Provided customer service and performed basic hardware repairs for game consoles and PCs.",
    current: false,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Animate timeline line
      if (timelineRef.current) {
        gsap.from(timelineRef.current, {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
          },
          scaleY: 0,
          transformOrigin: "top",
          duration: 1.5,
          ease: "power3.out",
        });
      }

      // Animate timeline items
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
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
      id="experience"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center px-6 py-20 lg:px-20"
    >
      <div className="w-full max-w-4xl">
        <h2
          ref={titleRef}
          className="text-darkAccent mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          Career Journey
        </h2>
        <p className="text-mutedAccent mx-auto mb-16 max-w-2xl text-center text-lg">
          A timeline of my professional growth and achievements
        </p>

        <div className="relative">
          {/* Timeline Line with gradient */}
          <div
            ref={timelineRef}
            className="from-mutedAccent via-darkAccent to-mutedAccent absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b shadow-lg"
          >
            {/* Glowing effect */}
            <div className="from-mutedAccent via-darkAccent to-mutedAccent absolute inset-0 bg-gradient-to-b opacity-50 blur-sm"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-5/12">
                  <div
                    className={`group relative overflow-hidden rounded-2xl border-2 bg-white/40 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                      exp.current
                        ? "border-lightAccent shadow-xl"
                        : "border-mutedAccent"
                    }`}
                  >
                    {/* Gradient overlay */}
                    <div className="from-mutedAccent/5 to-lightAccent/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    <div className="relative z-10">
                      {exp.current && (
                        <div className="from-lightAccent to-mutedAccent/50 text-darkAccent animate-pulse-glow mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-3 py-1 text-sm font-bold">
                          <span className="bg-darkAccent h-2 w-2 animate-pulse rounded-full"></span>
                          Current Position
                        </div>
                      )}
                      <h3 className="text-darkAccent group-hover:text-mutedAccent mb-2 text-xl font-bold transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-mutedAccent mb-2 flex items-center gap-2 font-semibold">
                        <span className="bg-mutedAccent h-2 w-2 rounded-full"></span>
                        {exp.company}
                      </p>
                      <p className="text-mutedAccent mb-3 text-sm font-medium">
                        {exp.period}
                      </p>
                      <p className="text-darkAccent leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Corner decoration */}
                    <div
                      className={`absolute top-0 ${index % 2 === 0 ? "right-0" : "left-0"} h-20 w-20 ${exp.current ? "bg-lightAccent/20" : "bg-mutedAccent/20"} ${index % 2 === 0 ? "rounded-bl-full" : "rounded-br-full"} transition-transform duration-500 group-hover:scale-150`}
                    ></div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="flex w-2/12 justify-center">
                  <div className="relative">
                    <div
                      className={`z-10 h-6 w-6 rounded-full transition-all duration-500 ${
                        exp.current
                          ? "from-lightAccent to-mutedAccent border-darkAccent animate-pulse-glow scale-125 border-4 bg-gradient-to-br"
                          : "bg-mutedAccent border-background border-4 hover:scale-125"
                      }`}
                    />
                    {/* Pulse ring for current */}
                    {exp.current && (
                      <div className="border-lightAccent absolute inset-0 animate-ping rounded-full border-2 opacity-75"></div>
                    )}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
