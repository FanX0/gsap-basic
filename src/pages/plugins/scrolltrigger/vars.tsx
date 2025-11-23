import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Vars = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [vars, setVars] = useState<Record<string, unknown>>({});

  useEffect(() => {
    if (!boxRef.current) return;
    stRef.current = ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%", end: "bottom 20%", id: "demo" });
  }, []);

  const read = () => setVars((stRef.current?.vars ?? {}) as Record<string, unknown>);

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-gray-700 rounded" />
        <button className="px-3 py-1 border rounded" onClick={read}>read vars</button>
        <pre className="text-xs bg-gray-100 p-2 rounded">{JSON.stringify(vars, null, 2)}</pre>
      </section>
    </DocumentationLayout>
  );
};

export default Vars;
