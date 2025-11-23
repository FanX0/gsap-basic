import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DrawSVGStatic = { getPosition?: (target: Element | string, position?: number | string) => unknown };

const DrawSVGGetPosition = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pos, setPos] = useState<unknown | null>(null);
  const getD = () => (globalThis as { DrawSVGPlugin?: DrawSVGStatic }).DrawSVGPlugin;
  const hasPlugin = Boolean(getD());

  const read = () => setPos(getD()?.getPosition?.(pathRef.current!, "50%") ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 Q100 5 190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        {!hasPlugin && <div className="text-sm text-red-600">DrawSVGPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{pos ? JSON.stringify(pos, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default DrawSVGGetPosition;
