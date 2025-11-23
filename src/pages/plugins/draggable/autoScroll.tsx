import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = {
  autoScroll?: number | boolean;
  kill?: () => void;
};
type DraggableStatic = {
  create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[];
};

const AutoScrollProp = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<DraggableInstance | null>(null);
  const [val, setVal] = useState<string>("");
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    instRef.current = D.create?.(boxRef.current, { type: "x,y", autoScroll: 1 })?.[0] ?? null;
    return () => instRef.current?.kill?.();
  }, []);

  const read = () => setVal(String(instRef.current?.autoScroll ?? ""));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="h-[40vh] overflow-auto border p-4">
          <div className="h-[120vh]">
            <div ref={boxRef} className="size-10 bg-indigo-600" />
          </div>
        </div>
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">autoScroll: {val}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default AutoScrollProp;
