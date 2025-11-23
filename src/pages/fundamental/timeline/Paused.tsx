import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Paused = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 1 });
  }, []);

  const toggle = () => {
    const tl = tlRef.current;
    if (!tl) return;
    tl.paused(!tl.paused());
    setPaused(tl.paused());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-slate-700 rounded" />
          <div className="text-sm">paused(): {paused ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={toggle}>toggle paused()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Paused;
