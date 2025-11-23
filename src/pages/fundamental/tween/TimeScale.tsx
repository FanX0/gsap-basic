import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const TimeScale = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 2, paused: true });
  }, []);

  const setS = (s: number) => {
    const t = tweenRef.current;
    if (!t) return;
    t.timeScale(s).play();
    setScale(t.timeScale());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-green-800 rounded" />
          <div className="text-sm">timeScale(): {scale}</div>
          <button className="px-3 py-1 border rounded" onClick={() => setS(0.5)}>0.5x</button>
          <button className="px-3 py-1 border rounded" onClick={() => setS(1)}>1x</button>
          <button className="px-3 py-1 border rounded" onClick={() => setS(2)}>2x</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default TimeScale;
