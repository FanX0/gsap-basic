import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const From = () => {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elRef.current) {
      gsap.from(elRef.current, { opacity: 0, y: 60, duration: 1 });
    }
  }, []);

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-lg font-semibold">gsap.from</h1>
        <p className="text-sm text-gray-600">Animates from the given starting values to the current state. Example: gsap.from(el, &#123; opacity: 0, y: 60 &#125;)</p>
      </header>
      <div className="flex items-center gap-4">
        <div ref={elRef} className="size-16 bg-indigo-600 rounded-md" />
        <div className="text-sm">gsap.from()</div>
      </div>
    </section>
  );
};

export default From;
