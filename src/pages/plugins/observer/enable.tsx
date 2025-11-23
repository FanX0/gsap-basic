import { useEffect, useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ObserverInstance = { enable?: () => void; disable?: () => void; kill?: () => void };
type ObserverStatic = { create?: (vars?: unknown) => ObserverInstance };

const ObserverEnable = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<ObserverInstance | null>(null);
  const getObs = () => (globalThis as { Observer?: ObserverStatic }).Observer;
  const hasPlugin = Boolean(getObs());

  useEffect(() => {
    const Obs = getObs();
    const box = boxRef.current;
    if (!Obs || !box) return;
    const inst = Obs.create?.({ target: box, type: "pointer,touch" }) ?? null;
    instRef.current = inst;
    inst?.disable?.();
    return () => instRef.current?.kill?.();
  }, []);

  const enable = () => instRef.current?.enable?.();

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">Observer is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={enable}>enable()</button>
      </section>
    </DocumentationLayout>
  );
};

export default ObserverEnable;
