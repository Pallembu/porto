"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const headlineRef = useRef<HTMLParagraphElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate profile image
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
      });

      // Animate name with letter-by-letter reveal
      if (nameRef.current) {
        const letters = nameRef.current.textContent?.split("") || [];
        nameRef.current.innerHTML = letters
          .map(
            (letter) =>
              `<span class="inline-block">${letter === " " ? "&nbsp;" : letter}</span>`
          )
          .join("");

        gsap.from(nameRef.current.children, {
          opacity: 0,
          y: 50,
          rotationX: -90,
          stagger: 0.03,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.3,
        });
      }

      // Animate headline
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1.2,
        ease: "power3.out",
      });

      // Animate summary
      gsap.from(summaryRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1.5,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 lg:px-20"
    >
      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Profile Image */}
        <div
          ref={imageRef}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="border-mutedAccent animate-float group relative h-72 w-72 overflow-hidden rounded-full border-8 shadow-2xl transition-transform duration-500 hover:scale-105 lg:h-96 lg:w-96">
            {/* Glowing effect */}
            <div className="from-mutedAccent via-darkAccent to-mutedAccent absolute inset-0 bg-gradient-to-br opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="via-lightAccent/30 animate-pulse-glow absolute inset-0 bg-gradient-to-tr from-transparent to-transparent"></div>
            <div className="text-background relative flex h-full w-full items-center justify-center text-8xl font-bold">
              Z
            </div>
            {/* Replace the div above with Image component when you have a profile photo: */}
            <Image
              src="/profile.jpg"
              alt="Muhammad Faizal Rais Athallah"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h1
            ref={nameRef}
            className="text-darkAccent mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Muhammad Faizal Rais Athallah
          </h1>

          <p
            ref={headlineRef}
            className="text-mutedAccent mb-6 text-xl font-medium md:text-2xl lg:text-3xl"
          >
            IT Infra Support & Web Developer Freelance
          </p>

          <p
            ref={summaryRef}
            className="text-darkAccent mb-8 max-w-2xl text-base leading-relaxed md:text-lg"
          >
            A man chasing freedom, bound only by discipline and the will to keep
            improving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="bg-mutedAccent text-background hover:bg-darkAccent transform rounded-lg px-6 py-3 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-mutedAccent text-mutedAccent hover:bg-mutedAccent hover:text-background transform rounded-lg border-2 bg-transparent px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
