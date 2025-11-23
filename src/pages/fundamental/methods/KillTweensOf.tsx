import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const KillTweensOf = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) gsap.to(boxRef.current, { x: 200, duration: 4 });
  }, []);

  const kill = () => {
    if (boxRef.current) gsap.killTweensOf(boxRef.current);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.killTweensOf</h1>
          <p className="text-sm text-gray-600">Immediately kills all tweens of the provided target(s). Useful for interrupting or cleaning up animations.</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-red-600 rounded" />
          <button className="px-3 py-1 border rounded" onClick={kill}>killTweensOf</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default KillTweensOf;
