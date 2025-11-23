import { useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type FlipStatic = {
  fit?: (element: Element | null, target: Element | null, vars?: unknown) => void;
};

const FlipFit = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const getFlip = () => (globalThis as { Flip?: FlipStatic }).Flip;
  const hasFlip = Boolean(getFlip());

  const run = () => {
    const Flip = getFlip();
    if (!Flip) return;
    Flip.fit?.(boxRef.current, targetRef.current, { scale: true });
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="flex items-center gap-6">
          <div ref={boxRef} className="size-10 bg-indigo-600" />
          <div ref={targetRef} className="w-20 h-14 bg-slate-300" />
        </div>
        {!hasFlip && <div className="text-sm text-red-600">Flip is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={run}>fit()</button>
      </section>
    </DocumentationLayout>
  );
};

export default FlipFit;
