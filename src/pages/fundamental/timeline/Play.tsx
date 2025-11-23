import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Play = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 2 });
  }, []);

  const play = () => tlRef.current?.play();

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-blue-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={play}>play()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Play;
