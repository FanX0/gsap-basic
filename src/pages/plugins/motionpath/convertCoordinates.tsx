import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { convertCoordinates?: (fromElement: Element, toElement: Element, point?: { x?: number; y?: number }) => unknown };

const MPConvertCoordinates = () => {
  const fromRef = useRef<HTMLDivElement | null>(null);
  const toRef = useRef<HTMLDivElement | null>(null);
  const [val, setVal] = useState<unknown | null>(null);
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const run = () => setVal(getMP()?.convertCoordinates?.(fromRef.current!, toRef.current!, { x: 10, y: 20 }) ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="flex gap-8">
          <div ref={fromRef} className="h-16 w-24 border" />
          <div ref={toRef} className="h-16 w-24 border" />
        </div>
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{val ? JSON.stringify(val, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={run}>convertCoordinates</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPConvertCoordinates;
