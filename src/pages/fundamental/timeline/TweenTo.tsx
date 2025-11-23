import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const TweenTo = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const bRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 200, duration: 1 }, "start");
    tl.addLabel("mid");
    if (bRef.current) tl.to(bRef.current, { x: 200, duration: 1 }, "end");
  }, []);

  const toMid = () => tlRef.current?.tweenTo("mid");
  const toEnd = () => tlRef.current?.tweenTo("end");

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-slate-700 rounded" />
          <div ref={bRef} className="size-10 bg-slate-500 rounded" />
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 border rounded" onClick={toMid}>tweenTo("mid")</button>
          <button className="px-3 py-1 border rounded" onClick={toEnd}>tweenTo("end")</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default TweenTo;
