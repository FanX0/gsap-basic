import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Seek = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 2 });
  }, []);

  const seek = (t: number) => tlRef.current?.seek(t).pause();

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-sky-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={() => seek(0)}>seek(0)</button>
          <button className="px-3 py-1 border rounded" onClick={() => seek(1)}>seek(1)</button>
          <button className="px-3 py-1 border rounded" onClick={() => seek(2)}>seek(2)</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Seek;
