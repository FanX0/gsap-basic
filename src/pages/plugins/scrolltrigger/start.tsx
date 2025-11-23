import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const Start = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [start, setStart] = useState(0);

  useEffect(() => {
    if (!boxRef.current) return;
    stRef.current = ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%", end: "bottom 20%" });
  }, []);

  const read = () => setStart(stRef.current?.start ?? 0);

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-emerald-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">start: {start}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Start;
