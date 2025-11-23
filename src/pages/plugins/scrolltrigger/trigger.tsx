import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Trigger = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [name, setName] = useState("-");

  useEffect(() => {
    if (!boxRef.current) return;
    stRef.current = ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%" });
  }, []);

  const read = () => {
    const el = stRef.current?.trigger as Element | undefined;
    setName(el ? el.nodeName : "-");
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-pink-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">trigger: {name}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Trigger;
