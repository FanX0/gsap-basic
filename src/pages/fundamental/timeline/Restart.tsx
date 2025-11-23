import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Restart = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 2 });
  }, []);

  const restart = () => tlRef.current?.restart(true);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-lime-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={restart}>restart(true)</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Restart;
