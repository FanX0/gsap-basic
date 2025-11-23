import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Iteration = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [iter, setIter] = useState(0);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 150, duration: 0.6, yoyo: true, repeat: 2 });
      const id = setInterval(() => setIter(tweenRef.current?.iteration() ?? 0), 100);
      return () => clearInterval(id);
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-yellow-700 rounded" />
          <div className="text-sm">iteration(): {iter}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Iteration;
