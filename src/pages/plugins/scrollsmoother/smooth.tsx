import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const SmoothMethod = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  type Smoother = { smooth?: (value?: number) => number; kill?: () => void };
  const smootherRef = useRef<Smoother | null>(null);
  const availableRef = useRef<boolean>(true);
  const [value, setValue] = useState<number>(0);
  const getS = () => (globalThis as { ScrollSmoother?: { create: (vars: unknown) => Smoother } }).ScrollSmoother;
  const hasSmoother = Boolean(getS());

  useEffect(() => {
    const S = getS();
    if (!S) {
      availableRef.current = false;
      return;
    }
    gsap.registerPlugin(S);
    if (wrapperRef.current && contentRef.current) {
      smootherRef.current = S.create({ wrapper: wrapperRef.current, content: contentRef.current, smooth: 1.0 });
    }
    return () => {
      smootherRef.current?.kill?.();
      smootherRef.current = null;
    };
  }, []);

  const read = () => setValue(Number(smootherRef.current?.smooth?.() ?? 0));
  const set12 = () => smootherRef.current?.smooth?.(1.2);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={wrapperRef} className="relative h-[60vh] overflow-auto rounded border">
          <div ref={contentRef} className="min-h-[200vh] p-6 space-y-4">
            <div className="size-10 bg-indigo-700 rounded" />
            <div className="size-10 bg-pink-600 rounded" />
            <div className="size-10 bg-emerald-600 rounded" />
          </div>
        </div>
        {!hasSmoother && <div className="text-sm text-red-600">ScrollSmoother is not available.</div>}
        <div className="text-sm">smooth(): {value.toFixed(2)}</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
          <button className="px-3 py-1 border rounded" onClick={set12}>smooth(1.2)</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default SmoothMethod;
