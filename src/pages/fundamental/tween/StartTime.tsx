import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const StartTime = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [start, setStart] = useState(0);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 2 });
      setStart(tweenRef.current.startTime());
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-violet-800 rounded" />
          <div className="text-sm">startTime(): {start.toFixed(2)}s</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default StartTime;
