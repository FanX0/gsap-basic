import { useEffect, useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = { lockAxis?: boolean; kill?: () => void };
type DraggableStatic = { create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[] };

const LockAxisProp = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<DraggableInstance | null>(null);
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    instRef.current = D.create?.(boxRef.current, { type: "x,y", lockAxis: true })?.[0] ?? null;
    return () => instRef.current?.kill?.();
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">lockAxis: true</div>
      </section>
    </DocumentationLayout>
  );
};

export default LockAxisProp;
