import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const FromTo = () => {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elRef.current)
      gsap.fromTo(elRef.current, { x: 0, opacity: 0 }, { x: 150, opacity: 1, duration: 1 });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.fromTo</h1>
          <p className="text-sm text-gray-600">Animates from explicit start values to explicit end values. Example: gsap.fromTo(el, &#123; x: 0 &#125;, &#123; x: 150, opacity: 1 &#125;)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={elRef} className="size-10 bg-pink-500 rounded" />
          <div className="text-sm">gsap.fromTo()</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default FromTo;
