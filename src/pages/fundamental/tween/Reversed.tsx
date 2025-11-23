import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Reversed = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [rev, setRev] = useState(false);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 1, paused: true });
  }, []);

  const toggle = () => {
    const t = tweenRef.current;
    if (!t) return;
    t.reversed(!t.reversed());
    setRev(t.reversed());
    t.play();
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-rose-800 rounded" />
          <div className="text-sm">reversed(): {rev ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={toggle}>toggle reversed()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Reversed;
