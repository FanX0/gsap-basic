import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const ScrollerProxy = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    ScrollTrigger.scrollerProxy(el, {
      scrollTop(value?: number) {
        if (arguments.length) el.scrollTop = Number(value);
        return el.scrollTop;
      },
      getBoundingClientRect() {
        return el.getBoundingClientRect();
      },
      pinType: "transform",
    });
    ScrollTrigger.create({ scroller: el, trigger: el, start: "top top", end: "+=300" });
  }, []);

  return (
    <DocumentationLayout>
      <section ref={containerRef} className="space-y-6 h-64 overflow-auto border rounded p-4">
        <div className="h-[600px]">custom scroller area</div>
      </section>
    </DocumentationLayout>
  );
};

export default ScrollerProxy;
