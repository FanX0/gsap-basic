import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { getRelativePosition?: (target: Element, path: Element | string) => unknown };

const MPGetRelativePosition = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<unknown | null>(null);
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const read = () => setPos(getMP()?.getRelativePosition?.(boxRef.current!, pathRef.current!) ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 Q100 5 190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{pos ? JSON.stringify(pos, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={read}>getRelativePosition</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPGetRelativePosition;
