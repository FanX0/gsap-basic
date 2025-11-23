import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Play = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 2, paused: true });
  }, []);

  const play = () => tweenRef.current?.play();

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">tween.play()</h1>
          <p className="text-sm text-gray-600">Plays the tween forward from the current position. Use after pause() or to start a paused tween.</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-blue-800 rounded" />
          <button className="px-3 py-1 border rounded" onClick={play}>play()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Play;
