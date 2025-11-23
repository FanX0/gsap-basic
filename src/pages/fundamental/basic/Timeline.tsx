import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Timeline = () => {
  const greenRef = useRef<HTMLDivElement | null>(null);
  const blueRef = useRef<HTMLDivElement | null>(null);
  const orangeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (greenRef.current) tl.to(greenRef.current, { duration: 1, x: 200 });
    if (blueRef.current) tl.to(blueRef.current, { duration: 2, x: 200 });
    if (orangeRef.current) tl.to(orangeRef.current, { duration: 1, x: 200 });
  }, []);

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-lg font-semibold">gsap.timeline</h1>
        <p className="text-sm text-gray-600">Creates a timeline to sequence multiple tweens with precise control. Example: const tl = gsap.timeline(); tl.to(el, &#123; x: 100 &#125;).to(el2, &#123; y: 50 &#125;)</p>
      </header>
      <div className="flex items-center gap-4">
        <div ref={greenRef} className="size-12 bg-green-600 rounded-md" />
        <div ref={blueRef} className="size-12 bg-blue-600 rounded-md" />
        <div ref={orangeRef} className="size-12 bg-orange-500 rounded-md" />
        <div className="text-sm">gsap.timeline()</div>
      </div>
    </section>
  );
};

export default Timeline;
