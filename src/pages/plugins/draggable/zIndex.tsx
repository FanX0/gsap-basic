import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = { zIndex?: number; kill?: () => void };
type DraggableStatic = { create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[] };

const ZIndexProp = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<DraggableInstance | null>(null);
  const [val, setVal] = useState(0);
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    instRef.current = D.create?.(boxRef.current, { type: "x,y", zIndexBoost: true })?.[0] ?? null;
    return () => instRef.current?.kill?.();
  }, []);

  const read = () => setVal(Number(instRef.current?.zIndex ?? 0));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="flex gap-2">
          <div className="size-10 bg-slate-300" />
          <div ref={boxRef} className="size-10 bg-indigo-600" />
        </div>
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">zIndex: {val.toFixed(0)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default ZIndexProp;
