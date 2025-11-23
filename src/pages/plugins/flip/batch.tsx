import { useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type FlipStatic = {
  batch?: (elements: Element[] | NodeListOf<Element>, vars?: unknown) => void;
};

const FlipBatch = () => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const getFlip = () => (globalThis as { Flip?: FlipStatic }).Flip;
  const hasFlip = Boolean(getFlip());

  const run = () => {
    const Flip = getFlip();
    if (!Flip || !listRef.current) return;
    const items = listRef.current.querySelectorAll(".item");
    Flip.batch?.(items, { delay: 0.1 });
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={listRef} className="flex gap-2">
          <div className="item size-8 bg-indigo-600" />
          <div className="item size-8 bg-pink-600" />
          <div className="item size-8 bg-emerald-600" />
        </div>
        {!hasFlip && <div className="text-sm text-red-600">Flip is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={run}>batch()</button>
      </section>
    </DocumentationLayout>
  );
};

export default FlipBatch;
