import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Create = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%", end: "+=200" });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-10 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-slate-700 rounded" />
      </section>
    </DocumentationLayout>
  );
};

export default Create;
