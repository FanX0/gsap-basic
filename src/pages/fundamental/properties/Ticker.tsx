import { useEffect, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Ticker = () => {
  const [time, setTime] = useState(0);
  const [delta, setDelta] = useState(0);
  const [frame, setFrame] = useState(0);
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    const onTick = (t: number, d: number, f: number) => {
      setTime(t);
      setDelta(d);
      setFrame(f);
      setRatio(gsap.ticker.deltaRatio(60));
    };
    gsap.ticker.add(onTick);
    return () => {
      gsap.ticker.remove(onTick);
    };
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.ticker</h1>
          <p className="text-sm text-gray-600">Internal high-performance heartbeat for GSAP. You can listen to ticks, change FPS, and read delta ratio for frame-independent logic.</p>
        </header>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded" onClick={() => gsap.ticker.fps(30)}>fps 30</button>
          <button className="px-3 py-1 border rounded" onClick={() => gsap.ticker.fps(60)}>fps 60</button>
        </div>
        <div className="text-sm">time: {time.toFixed(2)}s</div>
        <div className="text-sm">delta: {delta.toFixed(2)}ms</div>
        <div className="text-sm">frame: {frame}</div>
        <div className="text-sm">deltaRatio(60): {ratio.toFixed(2)}</div>
      </section>
    </DocumentationLayout>
  );
};

export default Ticker;
