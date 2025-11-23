import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ObserverInstance = { kill?: () => void } & Record<string, unknown>;
type ObserverStatic = { create?: (vars?: unknown) => ObserverInstance };

export const makeObserverProp = (prop: string, type: string = "pointer,touch") => {
  const Comp = () => {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const instRef = useRef<ObserverInstance | null>(null);
    const [val, setVal] = useState<unknown | null>(null);
    const getObs = () => (globalThis as { Observer?: ObserverStatic }).Observer;
    const hasPlugin = Boolean(getObs());

    useEffect(() => {
      const Obs = getObs();
      const box = boxRef.current;
      if (!Obs || !box) return;
      instRef.current = Obs.create?.({ target: box, type }) ?? null;
      return () => instRef.current?.kill?.();
    }, []);

    const read = () => setVal(instRef.current?.[prop] ?? null);

    return (
      <DocumentationLayout>
        <section className="space-y-6 pt-10">
          <div ref={boxRef} className="size-10 bg-indigo-600" />
          {!hasPlugin && <div className="text-sm text-red-600">Observer is not available.</div>}
          <pre className="text-xs whitespace-pre-wrap">{val != null ? JSON.stringify(val, null, 2) : ""}</pre>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </section>
      </DocumentationLayout>
    );
  };
  return Comp;
};
