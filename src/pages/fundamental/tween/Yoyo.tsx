import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Yoyo = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [yoyo, setYoyo] = useState(false);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 1, repeat: 2, paused: true });
  }, []);

  const toggle = () => {
    const t = tweenRef.current;
    if (!t) return;
    t.yoyo(!t.yoyo());
    setYoyo(t.yoyo());
    t.restart(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-green-900 rounded" />
          <div className="text-sm">yoyo(): {yoyo ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={toggle}>toggle yoyo()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Yoyo;
