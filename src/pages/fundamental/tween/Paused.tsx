import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Paused = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 2, paused: true });
      setPaused(tweenRef.current.paused());
    }
  }, []);

  const toggle = () => {
    const t = tweenRef.current;
    if (!t) return;
    t.paused(!t.paused());
    setPaused(t.paused());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-slate-600 rounded" />
          <div className="text-sm">paused(): {paused ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={toggle}>toggle paused()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Paused;
