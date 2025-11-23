import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Scroller = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [scroller, setScroller] = useState("-");

  useEffect(() => {
    if (!containerRef.current) return;
    stRef.current = ScrollTrigger.create({ trigger: containerRef.current, start: "top top" });
  }, []);

  const read = () => {
    const s = stRef.current?.scroller as Element | Window | undefined;
    setScroller(s && "nodeName" in s ? (s as Element).nodeName : "window");
  };

  return (
    <DocumentationLayout>
      <section ref={containerRef} className="space-y-6 h-[150vh] pt-10">
        <div className="text-sm">scroller: {scroller}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default Scroller;
