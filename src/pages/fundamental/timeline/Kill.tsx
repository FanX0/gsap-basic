import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Kill = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 2 });
  }, []);

  const kill = () => tlRef.current?.kill();

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">timeline.kill()</h1>
          <p className="text-sm text-gray-600">Immediately kills a timeline and all of its child tweens. Useful for cleanup or interrupting complex sequences.</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-red-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={kill}>kill()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Kill;
