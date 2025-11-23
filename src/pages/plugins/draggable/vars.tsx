import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = { vars?: unknown; kill?: () => void };
type DraggableStatic = { create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[] };

const VarsProp = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<DraggableInstance | null>(null);
  const [vars, setVars] = useState<unknown | null>(null);
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !boxRef.current) return;
    instRef.current = D.create?.(boxRef.current, { type: "x,y", bounds: { minX: -100, maxX: 100 } })?.[0] ?? null;
    return () => instRef.current?.kill?.();
  }, []);

  const read = () => setVars(instRef.current?.vars ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{vars ? JSON.stringify(vars, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default VarsProp;
