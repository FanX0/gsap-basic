import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const Batch = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = Array.from(containerRef.current.querySelectorAll(".item"));
    ScrollTrigger.batch(items, {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
      start: "top 90%",
    });
  }, []);

  return (
    <DocumentationLayout>
      <section ref={containerRef} className="space-y-4 h-[150vh] pt-10">
        <div className="space-y-2">
          <div className="item size-8 bg-slate-500 rounded opacity-0 translate-y-6" />
          <div className="item size-8 bg-slate-600 rounded opacity-0 translate-y-6" />
          <div className="item size-8 bg-slate-700 rounded opacity-0 translate-y-6" />
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Batch;
