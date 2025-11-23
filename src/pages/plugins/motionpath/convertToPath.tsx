import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { convertToPath?: (targets: Element | Element[] | string, options?: unknown) => Element[] };

const MPConvertToPath = () => {
  const rectRef = useRef<SVGRectElement | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const [count, setCount] = useState(0);
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const run = () => {
    const items = [rectRef.current!, circleRef.current!].filter(Boolean) as Element[];
    const out = getMP()?.convertToPath?.(items) ?? [];
    setCount(out.length);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="80">
          <rect ref={rectRef} x="10" y="10" width="60" height="40" fill="currentColor" />
          <circle ref={circleRef} cx="120" cy="30" r="20" fill="currentColor" />
        </svg>
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <div className="text-sm">paths created: {count}</div>
        <button className="px-3 py-1 border rounded" onClick={run}>convertToPath</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPConvertToPath;
