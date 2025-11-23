import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Enable = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!boxRef.current) return;
    stRef.current = ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%" });
    stRef.current.disable();
  }, []);

  const enable = () => {
    stRef.current?.enable();
    setEnabled(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-slate-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">enabled: {enabled ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={enable}>enable()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Enable;
