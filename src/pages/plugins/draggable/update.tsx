import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = { update?: () => void; applyBounds?: (bounds?: unknown) => void; kill?: () => void };
type DraggableStatic = { create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[] };

const DGUpdate = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<DraggableInstance | null>(null);
  const [wide, setWide] = useState(false);
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    instRef.current = D.create?.(boxRef.current, { type: "x,y", bounds: { minX: -50, maxX: 50, minY: -50, maxY: 50 } })?.[0] ?? null;
    return () => instRef.current?.kill?.();
  }, []);

  const update = () => {
    const inst = instRef.current;
    if (!inst) return;
    if (wide) inst.applyBounds?.({ minX: -50, maxX: 50, minY: -50, maxY: 50 });
    else inst.applyBounds?.({ minX: -150, maxX: 150, minY: -150, maxY: 150 });
    inst.update?.();
    setWide(!wide);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="h-40 w-40 border relative">
          <div ref={boxRef} className="size-10 bg-indigo-600 absolute" />
        </div>
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">bounds: {wide ? "wide" : "narrow"}</div>
        <button className="px-3 py-1 border rounded" onClick={update}>update()</button>
      </section>
    </DocumentationLayout>
  );
};

export default DGUpdate;
