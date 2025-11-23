import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const From = () => {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elRef.current) gsap.from(elRef.current, { opacity: 0, y: 60, duration: 1 });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.from</h1>
          <p className="text-sm text-gray-600">Animates from given starting values to the current state. Example: gsap.from(el, &#123; opacity: 0, y: 60 &#125;)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={elRef} className="size-10 bg-indigo-600 rounded" />
          <div className="text-sm">gsap.from()</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default From;
