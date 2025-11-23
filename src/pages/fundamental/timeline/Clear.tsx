import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Clear = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const bRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 120, duration: 0.6 });
    if (bRef.current) tl.to(bRef.current, { x: 120, duration: 0.6 });
  }, []);

  const clear = () => tlRef.current?.clear();

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-pink-700 rounded" />
          <div ref={bRef} className="size-10 bg-purple-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={clear}>clear()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Clear;
