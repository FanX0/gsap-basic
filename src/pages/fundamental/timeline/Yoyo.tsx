import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Yoyo = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [yoyo, setYoyo] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 1, paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 1 });
  }, []);

  const toggle = () => {
    const tl = tlRef.current;
    if (!tl) return;
    tl.yoyo(!tl.yoyo());
    setYoyo(tl.yoyo());
    tl.restart(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-green-900 rounded" />
          <div className="text-sm">yoyo(): {yoyo ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={toggle}>toggle yoyo()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Yoyo;
