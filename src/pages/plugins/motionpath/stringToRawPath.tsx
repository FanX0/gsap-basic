import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { stringToRawPath?: (d: string) => unknown };

const MPStringToRawPath = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [raw, setRaw] = useState<unknown | null>(null);
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const run = () => setRaw(getMP()?.stringToRawPath?.(pathRef.current?.getAttribute("d") || "") ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 L190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{raw ? JSON.stringify(raw, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={run}>stringToRawPath</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPStringToRawPath;
