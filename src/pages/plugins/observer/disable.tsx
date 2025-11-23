import { useEffect, useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ObserverInstance = { disable?: () => void; kill?: () => void };
type ObserverStatic = { create?: (vars?: unknown) => ObserverInstance };

const ObserverDisable = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<ObserverInstance | null>(null);
  const getObs = () => (globalThis as { Observer?: ObserverStatic }).Observer;
  const hasPlugin = Boolean(getObs());

  useEffect(() => {
    const Obs = getObs();
    const box = boxRef.current;
    if (!Obs || !box) return;
    instRef.current = Obs.create?.({ target: box, type: "pointer,touch" }) ?? null;
    return () => instRef.current?.kill?.();
  }, []);

  const disable = () => instRef.current?.disable?.();

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">Observer is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={disable}>disable()</button>
      </section>
    </DocumentationLayout>
  );
};

export default ObserverDisable;
