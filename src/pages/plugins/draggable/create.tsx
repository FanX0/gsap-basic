import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = { kill?: () => void };
type DraggableStatic = { create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[] };

const DGCreate = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instsRef = useRef<DraggableInstance[] | null>(null);
  const [count, setCount] = useState(0);
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    const container = containerRef.current;
    if (!D || !container) return;
    instsRef.current = D.create?.(Array.from(container.querySelectorAll(".box")), { type: "x,y" }) ?? null;
    return () => instsRef.current?.forEach?.((i) => i.kill?.());
  }, []);

  const read = () => setCount(instsRef.current?.length ?? 0);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={containerRef} className="flex gap-2">
          <div className="box size-8 bg-indigo-600" />
          <div className="box size-8 bg-pink-600" />
          <div className="box size-8 bg-emerald-600" />
        </div>
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">instances: {count}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default DGCreate;
