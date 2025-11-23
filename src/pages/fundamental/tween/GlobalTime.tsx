import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "../../../components/layouts/DocumentationLayout";

const GlobalTime = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 150, duration: 1 });
      const gt = (
        tweenRef.current as unknown as { globalTime: () => number }
      ).globalTime();
      setTime(gt);
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-teal-700 rounded" />
          <div className="text-sm">globalTime(): {time.toFixed(2)}s</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default GlobalTime;