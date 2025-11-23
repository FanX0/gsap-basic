import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Timeline = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const bRef = useRef<HTMLDivElement | null>(null);
  const cRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (aRef.current) tl.to(aRef.current, { x: 120, duration: 0.6 });
    if (bRef.current) tl.to(bRef.current, { x: 120, duration: 1 });
    if (cRef.current) tl.to(cRef.current, { x: 120, duration: 0.6 });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.timeline</h1>
          <p className="text-sm text-gray-600">Creates a timeline to sequence multiple tweens with precise control. Example: const tl = gsap.timeline(); tl.to(el, &#123; x: 120 &#125;).to(el2, &#123; x: 120 &#125;)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-green-600 rounded" />
          <div ref={bRef} className="size-10 bg-blue-600 rounded" />
          <div ref={cRef} className="size-10 bg-orange-500 rounded" />
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Timeline;
