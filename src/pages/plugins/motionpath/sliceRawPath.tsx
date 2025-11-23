import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { stringToRawPath?: (d: string) => unknown; sliceRawPath?: (raw: unknown, start?: number, end?: number) => unknown };

const MPSliceRawPath = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [out, setOut] = useState<unknown | null>(null);
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const run = () => {
    const d = pathRef.current?.getAttribute("d") || "";
    const raw = getMP()?.stringToRawPath?.(d);
    const sliced = raw ? getMP()?.sliceRawPath?.(raw, 0.25, 0.75) : null;
    setOut(sliced ?? null);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 C60 5, 140 55, 190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{out ? JSON.stringify(out, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={run}>sliceRawPath</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPSliceRawPath;
