import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const GlobalTimeline = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState<number>(() => gsap.globalTimeline.timeScale());

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { x: 200, duration: 2, yoyo: true, repeat: -1 });
    }
  }, []);

  const setTimeScale = (s: number) => {
    gsap.globalTimeline.timeScale(s);
    setScale(s);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.globalTimeline</h1>
          <p className="text-sm text-gray-600">Global root timeline that drives GSAP animations. You can read or set its timeScale, pause/play, etc., to affect all child tweens/timelines.</p>
        </header>
        <div className="flex items-center gap-4">
          <div ref={boxRef} className="size-16 bg-green-600 rounded-md" />
          <div className="text-sm">gsap.globalTimeline</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded" onClick={() => setTimeScale(0.5)}>0.5x</button>
          <button className="px-3 py-1 border rounded" onClick={() => setTimeScale(1)}>1x</button>
          <button className="px-3 py-1 border rounded" onClick={() => setTimeScale(2)}>2x</button>
          <span className="ml-3 text-sm">timeScale: {scale}</span>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default GlobalTimeline;
