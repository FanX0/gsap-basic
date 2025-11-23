import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Defaults = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ScrollTrigger.defaults({ start: "top 75%", end: "+=150" });
    if (!boxRef.current) return;
    ScrollTrigger.create({ trigger: boxRef.current });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-10 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-blue-700 rounded" />
      </section>
    </DocumentationLayout>
  );
};

export default Defaults;
