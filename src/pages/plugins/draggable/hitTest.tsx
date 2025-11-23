import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type DraggableInstance = { kill?: () => void };
type DraggableStatic = {
  create?: (target: Element | Element[] | string, vars?: unknown) => DraggableInstance[];
  hitTest?: (a: Element, b: Element | string | { left: number; top: number; width: number; height: number }, threshold?: number) => boolean | unknown;
};

const DGHitTest = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const bRef = useRef<HTMLDivElement | null>(null);
  const [val, setVal] = useState<string>("");
  const getD = () => (globalThis as { Draggable?: DraggableStatic }).Draggable;
  const hasDraggable = Boolean(getD());

  useEffect(() => {
    const D = getD();
    if (!D || !aRef.current || !bRef.current) return;
    D.create?.(aRef.current, { type: "x,y" });
    D.create?.(bRef.current, { type: "x,y" });
    return () => {
      D.create?.(aRef.current!, { type: "x,y" })?.forEach?.((i) => i.kill?.());
      D.create?.(bRef.current!, { type: "x,y" })?.forEach?.((i) => i.kill?.());
    };
  }, []);

  const test = () => {
    const D = getD();
    const a = aRef.current!;
    const b = bRef.current!;
    const r = D?.hitTest?.(a, b);
    setVal(String(Boolean(r)));
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="flex gap-4">
          <div ref={aRef} className="size-10 bg-indigo-600" />
          <div ref={bRef} className="size-10 bg-pink-600" />
        </div>
        {!hasDraggable && <div className="text-sm text-red-600">Draggable is not available.</div>}
        <div className="text-sm">hitTest: {val}</div>
        <button className="px-3 py-1 border rounded" onClick={test}>hitTest()</button>
      </section>
    </DocumentationLayout>
  );
};

export default DGHitTest;
