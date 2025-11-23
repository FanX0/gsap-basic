import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Disable = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!boxRef.current) return;
    stRef.current = ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%" });
  }, []);

  const disable = () => {
    stRef.current?.disable();
    setDisabled(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-slate-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">disabled: {disabled ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={disable}>disable()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Disable;
