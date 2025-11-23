import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Repeat = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [repeat, setRepeat] = useState(0);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 1, paused: true });
  }, []);

  const setR = (r: number) => {
    const t = tweenRef.current;
    if (!t) return;
    t.repeat(r);
    setRepeat(t.repeat());
    t.restart(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-teal-800 rounded" />
          <div className="text-sm">repeat(): {repeat}</div>
          <button className="px-3 py-1 border rounded" onClick={() => setR(0)}>0</button>
          <button className="px-3 py-1 border rounded" onClick={() => setR(2)}>2</button>
          <button className="px-3 py-1 border rounded" onClick={() => setR(5)}>5</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Repeat;
