import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = {
  endDrag?: () => void;
  addEventListener?: (type: string, callback: (e: unknown) => void) => void;
  kill?: () => void;
};
type DraggableStatic = { create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[] };

const DGEndDrag = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<DraggableInstance | null>(null);
  const [ended, setEnded] = useState(0);
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    const inst = D.create?.(boxRef.current, { type: "x,y" })?.[0] ?? null;
    instRef.current = inst;
    inst?.addEventListener?.("dragend", () => setEnded((p) => p + 1));
    return () => instRef.current?.kill?.();
  }, []);

  const end = () => instRef.current?.endDrag?.();

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">dragend count: {ended}</div>
        <button className="px-3 py-1 border rounded" onClick={end}>endDrag()</button>
      </section>
    </DocumentationLayout>
  );
};

export default DGEndDrag;
