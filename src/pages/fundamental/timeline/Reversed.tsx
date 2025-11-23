import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Reversed = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [rev, setRev] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 1 });
  }, []);

  const toggle = () => {
    const tl = tlRef.current;
    if (!tl) return;
    tl.reversed(!tl.reversed());
    setRev(tl.reversed());
    tl.play();
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-rose-700 rounded" />
          <div className="text-sm">reversed(): {rev ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={toggle}>toggle reversed()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Reversed;
