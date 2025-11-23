import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const TotalProgress = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 2 });
  }, []);

  const setP = (p: number) => {
    const tl = tlRef.current;
    if (!tl) return;
    tl.totalProgress(p).pause();
    setProgress(tl.totalProgress());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-pink-700 rounded" />
          <div className="text-sm">totalProgress(): {progress.toFixed(2)}</div>
          <button className="px-3 py-1 border rounded" onClick={() => setP(0)}>0</button>
          <button className="px-3 py-1 border rounded" onClick={() => setP(0.5)}>0.5</button>
          <button className="px-3 py-1 border rounded" onClick={() => setP(1)}>1</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default TotalProgress;
