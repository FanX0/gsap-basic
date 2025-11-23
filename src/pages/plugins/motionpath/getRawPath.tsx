import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { getRawPath?: (path: Element | string) => unknown };

const MPGetRawPath = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [raw, setRaw] = useState<unknown | null>(null);
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const read = () => setRaw(getMP()?.getRawPath?.(pathRef.current!) ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 C60 5, 140 55, 190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{raw ? JSON.stringify(raw, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={read}>getRawPath</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPGetRawPath;
