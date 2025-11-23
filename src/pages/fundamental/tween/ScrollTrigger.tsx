import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerPage = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current && containerRef.current) {
      gsap.to(boxRef.current, {
        x: 300,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <DocumentationLayout>
      <section ref={containerRef} className="space-y-10 h-[150vh] pt-10">
        <div className="text-sm">Scroll the page to scrub the tween</div>
        <div ref={boxRef} className="size-10 bg-green-700 rounded" />
      </section>
    </DocumentationLayout>
  );
};

export default ScrollTriggerPage;
