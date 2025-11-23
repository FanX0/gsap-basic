import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const GetChildren = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const bRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 120, duration: 0.6 });
    if (bRef.current) tl.to(bRef.current, { x: 120, duration: 0.6 });
  }, []);

  const read = () => {
    const tl = tlRef.current;
    if (!tl) return;
    setCount(tl.getChildren(true, true, true).length);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-lime-700 rounded" />
          <div ref={bRef} className="size-10 bg-rose-700 rounded" />
        </div>
        <div className="text-sm">getChildren(): {count}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default GetChildren;
