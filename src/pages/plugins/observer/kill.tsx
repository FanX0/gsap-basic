import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ObserverInstance = { kill?: () => void };
type ObserverStatic = { create?: (vars?: unknown) => ObserverInstance };

const ObserverKill = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<ObserverInstance | null>(null);
  const [alive, setAlive] = useState<boolean | null>(null);
  const getObs = () => (globalThis as { Observer?: ObserverStatic }).Observer;
  const hasPlugin = Boolean(getObs());

  useEffect(() => {
    const Obs = getObs();
    const box = boxRef.current;
    if (!Obs || !box) return;
    instRef.current = Obs.create?.({ target: box, type: "pointer,touch" }) ?? null;
    return () => instRef.current?.kill?.();
  }, []);

  const kill = () => instRef.current?.kill?.();
  const read = () => setAlive(instRef.current != null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">Observer is not available.</div>}
        <div className="text-sm">alive: {alive === null ? "" : String(alive)}</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={kill}>kill()</button>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default ObserverKill;
