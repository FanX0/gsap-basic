import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerPage = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (aRef.current && containerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tl.to(aRef.current, { x: 300 });
    }
  }, []);

  return (
    <DocumentationLayout>
      <section ref={containerRef} className="space-y-10 h-[150vh] pt-10">
        <div className="text-sm">Scroll to scrub timeline</div>
        <div ref={aRef} className="size-10 bg-emerald-700 rounded" />
      </section>
    </DocumentationLayout>
  );
};

export default ScrollTriggerPage;
