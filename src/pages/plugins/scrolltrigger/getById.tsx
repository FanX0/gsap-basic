import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const GetById = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [found, setFound] = useState(false);

  useEffect(() => {
    if (!boxRef.current) return;
    ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%", id: "demo" });
  }, []);

  const read = () => setFound(Boolean(ScrollTrigger.getById("demo")));

  return (
    <DocumentationLayout>
      <section className="space-y-10 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-emerald-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">getById("demo"): {found ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default GetById;
