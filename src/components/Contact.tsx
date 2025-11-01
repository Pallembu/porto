"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMail, FiPhone, FiGlobe, FiGithub, FiLinkedin } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    id: 1,
    icon: FiMail,
    label: "Email",
    value: "faizal.rais29@gmail.com",
    href: "mailto:faizal.rais29@gmail.com",
  },
  {
    id: 2,
    icon: FiPhone,
    label: "Phone",
    value: "+62 813-8729-2445",
    href: "tel:+6281387292445",
  },
  {
    id: 3,
    icon: FiGlobe,
    label: "Website",
    value: "zaristh.page",
    href: "https://zaristh.page",
  },
  {
    id: 4,
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/Pallembu",
    href: "https://github.com/Pallembu",
  },
  {
    id: 5,
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/zaristh",
    href: "https://www.linkedin.com/in/zaristh/",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

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

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      // Animate contact cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
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
      id="contact"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center px-6 py-20 lg:px-20"
    >
      <div className="w-full max-w-5xl">
        <h2
          ref={titleRef}
          className="text-darkAccent mb-6 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          Get In Touch
        </h2>

        <p
          ref={subtitleRef}
          className="text-mutedAccent mb-4 text-center text-xl font-semibold md:text-2xl"
        >
          Let&apos;s build something together.
        </p>
        <p className="text-mutedAccent mx-auto mb-16 max-w-2xl text-center">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                href={contact.href}
                target={contact.id >= 3 ? "_blank" : undefined}
                rel={contact.id >= 3 ? "noopener noreferrer" : undefined}
                className="border-mutedAccent hover:border-lightAccent group relative overflow-hidden rounded-2xl border-2 bg-white/50 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:rotate-2 hover:shadow-2xl"
              >
                {/* Gradient overlay */}
                <div className="from-mutedAccent/10 to-lightAccent/10 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Shine effect */}
                <div className="absolute top-0 left-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>

                <div className="relative z-10">
                  <div className="from-mutedAccent to-darkAccent mb-4 inline-block rounded-xl bg-gradient-to-br p-4 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <Icon className="text-background text-3xl" />
                  </div>
                  <h3 className="text-darkAccent group-hover:text-mutedAccent mb-2 text-lg font-bold transition-colors duration-300">
                    {contact.label}
                  </h3>
                  <p className="text-mutedAccent group-hover:text-darkAccent font-medium break-words transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="from-lightAccent/20 absolute right-0 bottom-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl to-transparent transition-transform duration-500 group-hover:scale-150"></div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-darkAccent mb-1 text-xs opacity-40">
            © {new Date().getFullYear()} Muhammad Faizal Rais Athallah
          </p>
          <p className="text-darkAccent text-xs opacity-30">
            Built with Next.js, TailwindCSS & GSAP
          </p>
        </div>
      </div>
    </section>
  );
}
