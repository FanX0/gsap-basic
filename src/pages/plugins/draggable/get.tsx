import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = { x?: number; kill?: () => void };
type DraggableStatic = {
  create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[];
  get?: (target: Element | string) => DraggableInstance | null;
};

const DGGet = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [val, setVal] = useState(0);
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    D.create?.(boxRef.current, { type: "x" });
    return () => D.get?.(boxRef.current!)?.kill?.();
  }, []);

  const read = () => {
    const D = getD();
    const inst = D?.get?.(boxRef.current!);
    setVal(Number(inst?.x ?? 0));
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">x: {val.toFixed(0)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>get()</button>
      </section>
    </DocumentationLayout>
  );
};

export default DGGet;
