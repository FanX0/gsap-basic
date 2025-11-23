import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = { kill?: () => void; enabled?: () => boolean };
type DraggableStatic = { create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[] };

const DGKill = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<DraggableInstance | null>(null);
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    instRef.current = D.create?.(boxRef.current, { type: "x,y" })?.[0] ?? null;
    return () => instRef.current?.kill?.();
  }, []);

  const kill = () => instRef.current?.kill?.();
  const read = () => setEnabled(instRef.current?.enabled?.() ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">enabled(): {enabled === null ? "" : String(enabled)}</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={kill}>kill()</button>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default DGKill;
