import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [hasAnim, setHasAnim] = useState(false);

  useEffect(() => {
    if (!boxRef.current) return;
    const tween = gsap.to(boxRef.current, { x: 300, duration: 1.2 });
    stRef.current = ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%", end: "bottom 20%", animation: tween });
  }, []);

  const read = () => setHasAnim(Boolean(stRef.current?.animation));
  const play = () => stRef.current?.animation?.restart(true);

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-slate-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">has animation: {hasAnim ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
          <button className="px-3 py-1 border rounded" onClick={play}>play</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Animation;
