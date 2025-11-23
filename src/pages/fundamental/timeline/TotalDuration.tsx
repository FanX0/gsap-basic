import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const TotalDuration = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 2 });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 1 });
  }, []);

  const read = () => {
    const tl = tlRef.current;
    if (!tl) return;
    setTotal(tl.totalDuration());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-purple-700 rounded" />
          <div className="text-sm">totalDuration(): {total}s</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default TotalDuration;
