import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPHInstance = { kill?: () => void };
type MPHStatic = { editPath?: (path: Element, options?: unknown) => MPHInstance };

const MotionPathHelperEditPath = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [exists, setExists] = useState(false);
  const getMPH = () => (globalThis as { MotionPathHelper?: MPHStatic }).MotionPathHelper;
  const hasPlugin = Boolean(getMPH());
  const run = () => setExists(Boolean(getMPH()?.editPath?.(pathRef.current!) ?? null));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 C60 5, 140 55, 190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathHelper is not available.</div>}
        <div className="text-sm">editPath(): {String(exists)}</div>
        <button className="px-3 py-1 border rounded" onClick={run}>editPath()</button>
      </section>
    </DocumentationLayout>
  );
};

export default MotionPathHelperEditPath;
