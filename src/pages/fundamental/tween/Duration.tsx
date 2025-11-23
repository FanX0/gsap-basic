import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Duration = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [dur, setDur] = useState(1);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 150, duration: 1, paused: true });
    }
  }, []);

  const read = () => setDur(tweenRef.current?.duration() ?? 0);
  const set = (d: number) => {
    const t = tweenRef.current;
    if (!t) return;
    t.duration(d);
    t.restart(true);
    setDur(d);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">tween.duration()</h1>
          <p className="text-sm text-gray-600">Gets/sets the duration of a tween. Setting duration restarts the tween when you call restart(). Example: tween.duration(2)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-blue-700 rounded" />
          <div className="text-sm">duration: {dur}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
          <button className="px-3 py-1 border rounded" onClick={() => set(0.5)}>set 0.5</button>
          <button className="px-3 py-1 border rounded" onClick={() => set(2)}>set 2</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Duration;
