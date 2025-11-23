import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DrawSVGStatic = { getLength?: (target: Element | string) => number };

const DrawSVGGetLength = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [len, setLen] = useState(0);
  const getD = () =>
    (globalThis as { DrawSVGPlugin?: DrawSVGStatic }).DrawSVGPlugin;
  const hasPlugin = Boolean(getD());

  const read = () => setLen(Number(getD()?.getLength?.(pathRef.current!)) || 0);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path
            ref={pathRef}
            d="M10 30 L190 30"
            stroke="currentColor"
            fill="none"
            strokeWidth="4"
          />
        </svg>
        {!hasPlugin && (
          <div className="text-sm text-red-600">
            DrawSVGPlugin is not available.
          </div>
        )}
        <div className="text-sm">getLength(): {len.toFixed(0)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>
          read
        </button>
      </section>
    </DocumentationLayout>
  );
};

export default DrawSVGGetLength;
