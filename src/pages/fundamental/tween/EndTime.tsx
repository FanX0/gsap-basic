import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const EndTime = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 150, duration: 1 });
      setEnd(tweenRef.current.endTime());
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-green-700 rounded" />
          <div className="text-sm">endTime(): {end.toFixed(2)}s</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default EndTime;
