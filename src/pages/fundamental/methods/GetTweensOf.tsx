import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const GetTweensOf = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { x: 100, duration: 2 });
      gsap.to(boxRef.current, { y: 50, duration: 2 });
    }
  }, []);

  const pauseAll = () => {
    if (!boxRef.current) return;
    const tweens = gsap.getTweensOf(boxRef.current);
    tweens.forEach((t) => t.pause());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.getTweensOf</h1>
          <p className="text-sm text-gray-600">Returns an array of tweens affecting the target(s) so you can inspect or control them. Example: gsap.getTweensOf(el).forEach(t =&gt; t.pause())</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-teal-500 rounded" />
          <button className="px-3 py-1 border rounded" onClick={pauseAll}>pause tweens</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default GetTweensOf;
