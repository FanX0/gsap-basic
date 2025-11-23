import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Add = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const bRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (aRef.current) tl.add(gsap.to(aRef.current, { x: 120, duration: 0.6 }));
    if (bRef.current) tl.add(gsap.to(bRef.current, { x: 120, duration: 0.6 }), "+=0.2");
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-red-700 rounded" />
          <div ref={bRef} className="size-10 bg-blue-700 rounded" />
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Add;
