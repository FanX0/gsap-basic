import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Ratio = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, {
        x: 150,
        duration: 1,
        onUpdate: () => setRatio(tweenRef.current?.ratio ?? 0),
      });
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-blue-700 rounded" />
          <div className="text-sm">ratio: {ratio.toFixed(2)}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Ratio;
