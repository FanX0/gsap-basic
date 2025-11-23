import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Pause = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 2 });
  }, []);

  const pause = () => tweenRef.current?.pause();

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">tween.pause()</h1>
          <p className="text-sm text-gray-600">Pauses a tween at its current playhead position. Use with play()/resume() to control flow.</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-gray-800 rounded" />
          <button className="px-3 py-1 border rounded" onClick={pause}>pause()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Pause;
