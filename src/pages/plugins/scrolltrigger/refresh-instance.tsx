import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const RefreshInstance = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    stRef.current = ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%", end: "+=200" });
  }, []);

  const refresh = () => stRef.current?.refresh();

  return (
    <DocumentationLayout>
      <section className="space-y-10 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-gray-700 rounded" />
        <button className="px-3 py-1 border rounded" onClick={refresh}>refresh()</button>
      </section>
    </DocumentationLayout>
  );
};

export default RefreshInstance;
