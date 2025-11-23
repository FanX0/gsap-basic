import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const GetTween = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [hasTween, setHasTween] = useState(false);

  useEffect(() => {
    if (!boxRef.current) return;
    const tween = gsap.to(boxRef.current, { x: 300, duration: 1.2 });
    stRef.current = ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%", animation: tween });
  }, []);

  const read = () => setHasTween(Boolean(stRef.current?.getTween()));

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-teal-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">getTween(): {hasTween ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default GetTween;
