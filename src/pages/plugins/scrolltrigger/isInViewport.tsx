import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const IsInViewport = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [inside, setInside] = useState(false);

  useEffect(() => {
    // no trigger needed
  }, []);

  const read = () => {
    const el = boxRef.current;
    if (!el) return;
    setInside(Boolean(ScrollTrigger.isInViewport(el)));
  };

  return (
    <DocumentationLayout>
      <section className="space-y-10 h-[150vh] pt-10">
        <div className="h-[120vh]" />
        <div ref={boxRef} className="size-10 bg-purple-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">isInViewport(): {inside ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default IsInViewport;
