import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Invalidate = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: () => Math.random() * 200, duration: 1, paused: true });
    }
  }, []);

  const run = () => {
    const t = tweenRef.current;
    if (!t) return;
    t.invalidate();
    t.restart(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-cyan-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={run}>invalidate + restart</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Invalidate;
