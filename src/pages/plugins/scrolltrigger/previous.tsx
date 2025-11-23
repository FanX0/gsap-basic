import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const Previous = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    tl.addLabel("start").to(boxRef.current, { x: 100 }).addLabel("mid").to(boxRef.current, { x: 200 }).addLabel("end");
    stRef.current = ScrollTrigger.create({ animation: tl, trigger: boxRef.current, start: "top 80%" });
  }, []);

  const previous = () => stRef.current?.previous();

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-slate-700 rounded" />
        <button className="px-3 py-1 border rounded" onClick={previous}>previous()</button>
      </section>
    </DocumentationLayout>
  );
};

export default Previous;
