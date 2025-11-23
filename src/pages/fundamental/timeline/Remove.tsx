import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Remove = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tweenRef.current = gsap.to(aRef.current, { x: 120, duration: 0.6 });
    if (tweenRef.current) tl.add(tweenRef.current);
  }, []);

  const removeTween = () => {
    const tl = tlRef.current;
    const tw = tweenRef.current;
    if (!tl || !tw) return;
    tl.remove(tw);
    tl.play(0);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-rose-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={removeTween}>remove tween</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Remove;
