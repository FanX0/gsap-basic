import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type FlipStatic = {
  getState?: (elements: Element[] | Element | string) => unknown;
};

const FlipGetState = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [has, setHas] = useState(false);
  const getFlip = () => (globalThis as { Flip?: FlipStatic }).Flip;
  const hasFlip = Boolean(getFlip());

  const read = () => {
    const Flip = getFlip();
    const container = containerRef.current;
    if (!Flip || !container) return;
    const boxes = Array.from(container.querySelectorAll(".box"));
    const state = Flip.getState?.(boxes);
    setHas(Boolean(state));
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
        <div className="text-sm">state exists: {String(has)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>getState()</button>
      </section>
    </DocumentationLayout>
  );
};

export default FlipGetState;
