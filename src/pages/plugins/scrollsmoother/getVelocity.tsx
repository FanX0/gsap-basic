import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const GetVelocity = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  type Smoother = { getVelocity?: () => number; kill?: () => void };
  const smootherRef = useRef<Smoother | null>(null);
  const availableRef = useRef<boolean>(true);
  const [vel, setVel] = useState(0);
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

  const read = () => setVel(Number(smootherRef.current?.getVelocity?.() ?? 0));

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
        <div className="text-sm">getVelocity(): {vel.toFixed(0)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default GetVelocity;
