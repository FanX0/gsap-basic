import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Attributes = () => {
  const rectRef = useRef<SVGRectElement | null>(null);

  useEffect(() => {
    if (rectRef.current) {
      gsap.to(rectRef.current, {
        duration: 1,
        ease: "none",
        attr: { x: 60, y: 20, width: 140, height: 40 },
        x: 100,
      });
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <svg width="240" height="120">
          <rect ref={rectRef} id="rect" x="10" y="10" width="100" height="60" fill="#4b5563" />
        </svg>
        <div className="text-sm">attr: x,y,width,height and CSS x</div>
      </section>
    </DocumentationLayout>
  );
};

export default Attributes;
