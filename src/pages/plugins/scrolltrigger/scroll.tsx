import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Scroll = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!boxRef.current) return;
    stRef.current = ScrollTrigger.create({ trigger: boxRef.current, start: "top 80%" });
  }, []);

  const read = () => {
    const fn = (stRef.current?.scroll() as unknown) as ((n?: number) => number);
    if (typeof fn === "function") setVal(fn());
  };

  const set100 = () => {
    const fn = (stRef.current?.scroll() as unknown) as ((n?: number) => number);
    if (typeof fn === "function") fn(100);
    read();
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-gray-700 rounded" />
        <div className="flex items-center gap-3">
          <div className="text-sm">scroll(): {val}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
          <button className="px-3 py-1 border rounded" onClick={set100}>set(100)</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Scroll;
