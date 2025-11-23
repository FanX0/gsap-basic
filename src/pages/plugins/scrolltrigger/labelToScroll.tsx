import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const LabelToScroll = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if (!boxRef.current) return;
    const tl = gsap.timeline({ defaults: { duration: 0.6 } });
    tl.addLabel("start").to(boxRef.current, { x: 100 }).addLabel("mid").to(boxRef.current, { x: 200 }).addLabel("end");
    stRef.current = ScrollTrigger.create({ animation: tl, trigger: boxRef.current, start: "top 80%" });
  }, []);

  const read = () => setPos(stRef.current?.labelToScroll("mid") ?? 0);

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-yellow-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">labelToScroll("mid"): {pos.toFixed(0)}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default LabelToScroll;
