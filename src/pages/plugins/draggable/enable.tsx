import { useEffect, useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = { enable?: () => void; disable?: () => void; kill?: () => void };
type DraggableStatic = { create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[] };

const DGEnable = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<DraggableInstance | null>(null);
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    const inst = D.create?.(boxRef.current, { type: "x,y" })?.[0] ?? null;
    instRef.current = inst;
    inst?.disable?.();
    return () => instRef.current?.kill?.();
  }, []);

  const enable = () => instRef.current?.enable?.();

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={enable}>enable()</button>
      </section>
    </DocumentationLayout>
  );
};

export default DGEnable;
