import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableStatic = { timeSinceDrag?: () => number; create?: (target: Element | Element[] | string, vars?: unknown) => { kill?: () => void }[] };

const DGTimeSinceDrag = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [val, setVal] = useState(0);
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    D.create?.(boxRef.current, { type: "x,y" });
    return () => D.create?.(boxRef.current!, { type: "x,y" })?.forEach?.((i) => i.kill?.());
  }, []);

  const read = () => setVal(Number(getD()?.timeSinceDrag?.() ?? 0));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">timeSinceDrag(): {val.toFixed(0)} ms</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default DGTimeSinceDrag;
