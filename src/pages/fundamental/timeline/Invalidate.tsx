import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Invalidate = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: () => Math.random() * 200, duration: 0.6 });
  }, []);

  const run = () => {
    const tl = tlRef.current;
    if (!tl) return;
    tl.invalidate();
    tl.restart(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-cyan-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={run}>invalidate + restart</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Invalidate;
