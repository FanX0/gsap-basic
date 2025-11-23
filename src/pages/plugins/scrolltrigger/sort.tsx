import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Sort = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const bRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!aRef.current || !bRef.current) return;
    ScrollTrigger.create({ trigger: aRef.current, start: "top 90%" });
    ScrollTrigger.create({ trigger: bRef.current, start: "top 80%" });
  }, []);

  const sort = () => ScrollTrigger.sort();

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={aRef} className="size-10 bg-slate-500 rounded" />
        <div ref={bRef} className="size-10 bg-slate-700 rounded" />
        <button className="px-3 py-1 border rounded" onClick={sort}>sort()</button>
      </section>
    </DocumentationLayout>
  );
};

export default Sort;
