import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPHInstance = { kill?: () => void };
type MPHStatic = { editPath?: (path: Element, options?: unknown) => MPHInstance };

const MotionPathHelperKill = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const instRef = useRef<MPHInstance | null>(null);
  const [exists, setExists] = useState(false);
  const getMPH = () => (globalThis as { MotionPathHelper?: MPHStatic }).MotionPathHelper;
  const hasPlugin = Boolean(getMPH());

  useEffect(() => {
    const MPH = getMPH();
    const path = pathRef.current;
    if (!MPH || !path) return;
    instRef.current = MPH.editPath?.(path) ?? null;
    setExists(Boolean(instRef.current));
    return () => instRef.current?.kill?.();
  }, []);

  const kill = () => {
    instRef.current?.kill?.();
    setExists(false);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 Q100 5 190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathHelper is not available.</div>}
        <div className="text-sm">helper exists: {String(exists)}</div>
        <button className="px-3 py-1 border rounded" onClick={kill}>kill()</button>
      </section>
    </DocumentationLayout>
  );
};

export default MotionPathHelperKill;
