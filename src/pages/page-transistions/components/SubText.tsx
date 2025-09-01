"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function HeroSubText() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into lines
    const split = new SplitType(textRef.current, { types: "lines" });

    // Wrap each line in a masking container
    split.lines.forEach((line) => {
      const parent = document.createElement("div");
      parent.style.overflow = "hidden";
      parent.style.display = "block";
      line.parentNode?.insertBefore(parent, line);
      parent.appendChild(line);
    });

    // Animate each line from below
    gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      delay: 1.2
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="text-center max-w-[650px] mx-auto text-[#2C2E39] mt-5">
      <p ref={textRef} className="text-lg font-medium">
        Join the global sensation and see what the hype is all about. Shop the
        newest Labubu series now.
      </p>
    </div>
  );
}
