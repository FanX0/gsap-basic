import { useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Utils = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const shuffleAndMove = () => {
    if (!containerRef.current) return;
    const q = gsap.utils.selector(containerRef);
    const items = q(".box");
    items.forEach((el) => {
      const x = gsap.utils.clamp(0, 200, gsap.utils.random(0, 200));
      gsap.to(el, { x, duration: 0.6 });
    });
  };

  const mapped = gsap.utils.mapRange(0, 100, 0, 300, 50);

  return (
    <DocumentationLayout>
      <section className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils</h1>
          <p className="text-sm text-gray-600">Collection of utility functions like selector, clamp, random, mapRange. They help with data transformations and DOM querying.</p>
        </header>
        <div className="text-sm">mapRange(0,100,0,300,50): {mapped}</div>
        <div ref={containerRef} className="flex items-center gap-3">
          <div className="box size-10 bg-red-500 rounded" />
          <div className="box size-10 bg-blue-500 rounded" />
          <div className="box size-10 bg-green-500 rounded" />
          <div className="box size-10 bg-yellow-500 rounded" />
        </div>
        <button className="px-3 py-1 border rounded" onClick={shuffleAndMove}>shuffle and move</button>
      </section>
    </DocumentationLayout>
  );
};

export default Utils;
