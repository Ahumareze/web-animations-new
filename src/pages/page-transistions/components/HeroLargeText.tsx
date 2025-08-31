//@ts-nocheck

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function HeroLargeText({text}:{text: string}) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into chars
    const split = new SplitType(textRef.current, { types: "chars" });

    // Add masking styles to each character wrapper
    split.chars.forEach((char) => {
      (char as HTMLElement).style.display = "inline-block";
      (char as HTMLElement).style.overflow = "hidden";
    });

    // Animate characters
    gsap.from(split.chars, {
      y: "100%",
      stagger: 0.05,
      ease: "power4.out",
      duration: 1.2,
      delay: 1
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="w-fit h-fit mx-auto text-center overflow-hidden">
      <h1 ref={textRef} className="text-7xl font-extrabold text-black uppercase">
        {text}
      </h1>
    </div>
  );
}
