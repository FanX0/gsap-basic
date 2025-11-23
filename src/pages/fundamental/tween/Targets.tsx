import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Targets = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [targets, setTargets] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      const boxes = Array.from(containerRef.current.querySelectorAll(".box"));
      tweenRef.current = gsap.to(boxes, { x: 100, duration: 1, stagger: 0.1 });
      setTargets((tweenRef.current.targets() as Element[]).length);
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div ref={containerRef} className="flex items-center gap-2">
          <div className="box size-8 bg-red-600 rounded" />
          <div className="box size-8 bg-blue-600 rounded" />
          <div className="box size-8 bg-green-600 rounded" />
        </div>
        <div className="text-sm">targets(): {targets}</div>
      </section>
    </DocumentationLayout>
  );
};

export default Targets;
