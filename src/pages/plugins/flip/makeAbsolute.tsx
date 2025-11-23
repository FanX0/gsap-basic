import { useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type FlipStatic = {
  makeAbsolute?: (elements: Element[] | Element | string, vars?: unknown) => void;
};

const FlipMakeAbsolute = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const getFlip = () => (globalThis as { Flip?: FlipStatic }).Flip;
  const hasFlip = Boolean(getFlip());

  const run = () => {
    const Flip = getFlip();
    if (!Flip || !containerRef.current) return;
    const boxes = Array.from(containerRef.current.querySelectorAll(".box"));
    Flip.makeAbsolute?.(boxes);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={containerRef} className="flex gap-2">
          <div className="box size-8 bg-indigo-600" />
          <div className="box size-8 bg-pink-600" />
          <div className="box size-8 bg-emerald-600" />
        </div>
        {!hasFlip && <div className="text-sm text-red-600">Flip is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={run}>makeAbsolute()</button>
      </section>
    </DocumentationLayout>
  );
};

export default FlipMakeAbsolute;
