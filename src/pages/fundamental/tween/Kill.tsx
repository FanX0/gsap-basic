import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Kill = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 4 });
    }
  }, []);

  const kill = () => tweenRef.current?.kill();

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-red-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={kill}>kill()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Kill;
