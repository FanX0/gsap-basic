import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const PositionInViewport = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(0);

  useEffect(() => {}, []);

  const read = () => setPos(ScrollTrigger.positionInViewport(boxRef.current as Element));

  return (
    <DocumentationLayout>
      <section className="space-y-10 h-[150vh] pt-10">
        <div className="h-[120vh]" />
        <div ref={boxRef} className="size-10 bg-teal-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">positionInViewport(): {pos.toFixed(2)}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default PositionInViewport;
