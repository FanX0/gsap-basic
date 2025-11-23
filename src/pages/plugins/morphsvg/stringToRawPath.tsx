import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MorphSVGStatic = { stringToRawPath?: (d: string) => unknown };

const MorphStringToRawPath = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [raw, setRaw] = useState<unknown | null>(null);
  const getM = () => (globalThis as { MorphSVGPlugin?: MorphSVGStatic }).MorphSVGPlugin;
  const hasPlugin = Boolean(getM());

  const run = () => {
    const d = pathRef.current?.getAttribute("d") || "";
    setRaw(getM()?.stringToRawPath?.(d) ?? null);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 L190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        {!hasPlugin && <div className="text-sm text-red-600">MorphSVGPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{raw ? JSON.stringify(raw, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={run}>stringToRawPath</button>
      </section>
    </DocumentationLayout>
  );
};

export default MorphStringToRawPath;
