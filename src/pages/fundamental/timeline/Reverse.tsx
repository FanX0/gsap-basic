import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Reverse = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 1 });
  }, []);

  const reverse = () => tlRef.current?.reverse();

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-red-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={reverse}>reverse()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Reverse;
