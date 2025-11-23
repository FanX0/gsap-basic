import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Offset = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  type Smoother = { offset?: (el: Element | null) => number; kill?: () => void };
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
      smootherRef.current = S.create({ wrapper: wrapperRef.current, content: contentRef.current });
    }
    return () => {
      smootherRef.current?.kill?.();
      smootherRef.current = null;
    };
  }, []);

  const read = () => setValue(Number(smootherRef.current?.offset?.(targetRef.current) ?? 0));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={wrapperRef} className="relative h-[60vh] overflow-auto rounded border">
          <div ref={contentRef} className="min-h-[200vh] p-6 space-y-10">
            <div className="h-32 bg-slate-200 flex items-center justify-center">section</div>
            <div ref={targetRef} className="h-32 bg-indigo-600/60 flex items-center justify-center">target</div>
            <div className="h-32 bg-slate-200 flex items-center justify-center">section</div>
          </div>
        </div>
        {!hasSmoother && <div className="text-sm text-red-600">ScrollSmoother is not available.</div>}
        <div className="text-sm">offset(target): {value.toFixed(0)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default Offset;
