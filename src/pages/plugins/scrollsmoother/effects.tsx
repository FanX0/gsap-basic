import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const EffectsMethod = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  type Smoother = { effects?: (selector: string, config: unknown | false) => void; kill?: () => void };
  const smootherRef = useRef<Smoother | null>(null);
  const availableRef = useRef<boolean>(true);
  const [enabled, setEnabled] = useState(false);
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

  const toggle = () => {
    if (!smootherRef.current?.effects) return;
    if (!enabled) {
      smootherRef.current.effects(".parallax", { speed: 1.2, lag: 0.1 });
    } else {
      smootherRef.current.effects(".parallax", false);
    }
    setEnabled(!enabled);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={wrapperRef} className="relative h-[60vh] overflow-auto rounded border">
          <div ref={contentRef} className="min-h-[200vh] p-6 space-y-10">
            <div className="h-32 bg-slate-200 flex items-center justify-center">section</div>
            <div className="h-32 bg-slate-200 flex items-center justify-center relative overflow-hidden">
              <div className="parallax absolute inset-4 bg-indigo-600/60" />
            </div>
            <div className="h-32 bg-slate-200 flex items-center justify-center">section</div>
          </div>
        </div>
        {!hasSmoother && <div className="text-sm text-red-600">ScrollSmoother is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={toggle}>{enabled ? "disable effects" : "enable effects"}</button>
      </section>
    </DocumentationLayout>
  );
};

export default EffectsMethod;
