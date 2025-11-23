import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { getAlignMatrix?: (target: Element, path: Element | string, offset?: number) => unknown };

const MPGetAlignMatrix = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [mat, setMat] = useState<unknown | null>(null);
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const read = () => setMat(getMP()?.getAlignMatrix?.(boxRef.current!, pathRef.current!, 0.5) ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 Q100 5 190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{mat ? JSON.stringify(mat, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={read}>getAlignMatrix</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPGetAlignMatrix;
