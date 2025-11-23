import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Time = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 2 });
  }, []);

  const setT = (t: number) => {
    const tl = tlRef.current;
    if (!tl) return;
    tl.time(t);
    setTime(tl.time());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-orange-700 rounded" />
          <div className="text-sm">time(): {time.toFixed(2)}s</div>
          <button className="px-3 py-1 border rounded" onClick={() => setT(0)}>0</button>
          <button className="px-3 py-1 border rounded" onClick={() => setT(1)}>1</button>
          <button className="px-3 py-1 border rounded" onClick={() => setT(2)}>2</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Time;
