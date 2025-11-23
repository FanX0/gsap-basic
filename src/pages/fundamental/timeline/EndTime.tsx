import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const EndTime = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 120, duration: 0.6 });
  }, []);

  const read = () => {
    const tl = tlRef.current;
    if (!tl) return;
    setEnd(tl.endTime());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-amber-700 rounded" />
          <div className="text-sm">endTime(): {end.toFixed(2)}s</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default EndTime;
