import { useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type FlipStatic = {
  getState?: (elements: Element[] | Element | string) => unknown;
  from?: (state: unknown, vars?: unknown) => void;
};

const FlipFrom = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const getFlip = () => (globalThis as { Flip?: FlipStatic }).Flip;
  const hasFlip = Boolean(getFlip());

  const run = () => {
    const Flip = getFlip();
    const container = containerRef.current;
    if (!Flip || !container) return;
    const boxes = Array.from(container.querySelectorAll(".box"));
    const state = Flip.getState?.(boxes);
    container.appendChild(boxes[0]);
    Flip.from?.(state, { duration: 0.5 });
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
        <button className="px-3 py-1 border rounded" onClick={run}>from()</button>
      </section>
    </DocumentationLayout>
  );
};

export default FlipFrom;
