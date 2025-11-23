import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const TimeScale = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 2 });
  }, []);

  const setS = (s: number) => {
    const tl = tlRef.current;
    if (!tl) return;
    tl.timeScale(s).play();
    setScale(tl.timeScale());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-green-700 rounded" />
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
