import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const RepeatDelay = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [rd, setRd] = useState(0);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 0.6, repeat: 2, paused: true });
  }, []);

  const setVal = (v: number) => {
    const t = tweenRef.current;
    if (!t) return;
    t.repeatDelay(v);
    setRd(t.repeatDelay());
    t.restart(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-cyan-800 rounded" />
          <div className="text-sm">repeatDelay(): {rd}s</div>
          <button className="px-3 py-1 border rounded" onClick={() => setVal(0)}>0</button>
          <button className="px-3 py-1 border rounded" onClick={() => setVal(0.5)}>0.5</button>
          <button className="px-3 py-1 border rounded" onClick={() => setVal(1)}>1</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default RepeatDelay;
