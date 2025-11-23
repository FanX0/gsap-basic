import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = {
  addEventListener?: (type: string, callback: (e: unknown) => void) => void;
  kill?: () => void;
};
type DraggableStatic = { create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[] };

const DGAddEventListener = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<DraggableInstance | null>(null);
  const [counts, setCounts] = useState({ start: 0, drag: 0, end: 0 });
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    const inst = D.create?.(boxRef.current, { type: "x,y" })?.[0] ?? null;
    instRef.current = inst;
    inst?.addEventListener?.("dragstart", () => setCounts((p) => ({ ...p, start: p.start + 1 })));
    inst?.addEventListener?.("drag", () => setCounts((p) => ({ ...p, drag: p.drag + 1 })));
    inst?.addEventListener?.("dragend", () => setCounts((p) => ({ ...p, end: p.end + 1 })));
    return () => instRef.current?.kill?.();
  }, []);

  const reset = () => setCounts({ start: 0, drag: 0, end: 0 });

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">dragstart: {counts.start}</div>
        <div className="text-sm">drag: {counts.drag}</div>
        <div className="text-sm">dragend: {counts.end}</div>
        <button className="px-3 py-1 border rounded" onClick={reset}>reset</button>
      </section>
    </DocumentationLayout>
  );
};

export default DGAddEventListener;
