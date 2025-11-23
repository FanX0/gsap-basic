import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = { pointerEvent?: Event | null; kill?: () => void };
type DraggableStatic = { create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[] };

const PointerEventProp = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<DraggableInstance | null>(null);
  const [type, setType] = useState("");
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    instRef.current = D.create?.(boxRef.current, { type: "x,y" })?.[0] ?? null;
    return () => instRef.current?.kill?.();
  }, []);

  const read = () => setType(String(instRef.current?.pointerEvent?.type ?? ""));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">pointerEvent.type: {type}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default PointerEventProp;
