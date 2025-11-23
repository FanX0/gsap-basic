import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Delay = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 150, duration: 1, paused: true });
    }
  }, []);

  const setDelay = (d: number) => {
    const t = tweenRef.current;
    if (!t) return;
    t.delay(d);
    t.restart(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">tween.delay()</h1>
          <p className="text-sm text-gray-600">Gets/sets the start delay of a tween. Changing delay affects when playback begins. Example: tween.delay(1)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-slate-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={() => setDelay(0)}>delay(0)</button>
          <button className="px-3 py-1 border rounded" onClick={() => setDelay(1)}>delay(1)</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Delay;
