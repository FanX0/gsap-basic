import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const TotalTime = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 2, paused: true });
  }, []);

  const setT = (t: number) => {
    const tw = tweenRef.current;
    if (!tw) return;
    tw.totalTime(t);
    setTotal(tw.totalTime());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-fuchsia-800 rounded" />
          <div className="text-sm">totalTime(): {total.toFixed(2)}s</div>
          <button className="px-3 py-1 border rounded" onClick={() => setT(0)}>0</button>
          <button className="px-3 py-1 border rounded" onClick={() => setT(1)}>1</button>
          <button className="px-3 py-1 border rounded" onClick={() => setT(2)}>2</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default TotalTime;
