import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ObserverInstance = { kill?: () => void };
type ObserverStatic = { create?: (vars?: unknown) => ObserverInstance; getAll?: () => ObserverInstance[]; getById?: (id: string) => ObserverInstance | null; isTouch?: () => boolean };

const ObserverCreate = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<ObserverInstance | null>(null);
  const [exists, setExists] = useState(false);
  const getObs = () => (globalThis as { Observer?: ObserverStatic }).Observer;
  const hasPlugin = Boolean(getObs());

  useEffect(() => {
    const Obs = getObs();
    const box = boxRef.current;
    if (!Obs || !box) return;
    instRef.current = Obs.create?.({ target: box, type: "pointer,touch" }) ?? null;
    setExists(Boolean(instRef.current));
    return () => instRef.current?.kill?.();
  }, []);

  const readAll = () => alert(String(getObs()?.getAll?.()?.length ?? 0));
  const readById = () => alert(String(Boolean(getObs()?.getById?.("obs"))));
  const readIsTouch = () => alert(String(Boolean(getObs()?.isTouch?.())));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} id="obs" className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">Observer is not available.</div>}
        <div className="text-sm">create(): {String(exists)}</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={readAll}>getAll()</button>
          <button className="px-3 py-1 border rounded" onClick={readById}>getById('obs')</button>
          <button className="px-3 py-1 border rounded" onClick={readIsTouch}>isTouch()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default ObserverCreate;
