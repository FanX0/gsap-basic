import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const TotalDuration = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 2, repeat: 2 });
      setTotal(tweenRef.current.totalDuration());
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-purple-800 rounded" />
          <div className="text-sm">totalDuration(): {total}s</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default TotalDuration;
