import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Progress = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 2, paused: true });
  }, []);

  const setP = (p: number) => {
    const t = tweenRef.current;
    if (!t) return;
    t.progress(p).pause();
    setProgress(t.progress());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-indigo-800 rounded" />
          <div className="text-sm">progress(): {progress.toFixed(2)}</div>
          <button className="px-3 py-1 border rounded" onClick={() => setP(0)}>0</button>
          <button className="px-3 py-1 border rounded" onClick={() => setP(0.5)}>0.5</button>
          <button className="px-3 py-1 border rounded" onClick={() => setP(1)}>1</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Progress;
