import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const Pin = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (!boxRef.current) return;
    stRef.current = ScrollTrigger.create({ trigger: boxRef.current, start: "top top", end: "+=300", pin: true });
  }, []);

  const read = () => setPinned(Boolean(stRef.current?.vars.pin));

  return (
    <DocumentationLayout>
      <section className="space-y-10 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-red-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">pin: {pinned ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Pin;
