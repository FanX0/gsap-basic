import { useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsDistribute = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const alignCenter = () => {
    const container = containerRef.current;
    if (!container) return;
    const boxes = Array.from(container.querySelectorAll<HTMLDivElement>(".box"));
    const dist = gsap.utils.distribute({ base: 0, amount: 200, from: "center" }) as (i: number, t: Element, a: Element[]) => number;
    gsap.to(boxes, { x: (i, t, a) => dist(i, t as Element, a as Element[]), duration: 0.6 });
  };
  const alignEdges = () => {
    const container = containerRef.current;
    if (!container) return;
    const boxes = Array.from(container.querySelectorAll<HTMLDivElement>(".box"));
    const dist = gsap.utils.distribute({ base: 0, amount: 200, from: "edges" }) as (i: number, t: Element, a: Element[]) => number;
    gsap.to(boxes, { x: (i, t, a) => dist(i, t as Element, a as Element[]), duration: 0.6 });
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.distribute</h1>
          <p className="text-sm text-gray-600">Generates a function to distribute values across targets based on index and strategy (e.g., center, edges). Example: const dist = gsap.utils.distribute(&#123; base: 0, amount: 200, from: "center" &#125;)</p>
        </header>
        <div ref={containerRef} className="flex gap-2">
          <div className="box size-10 bg-indigo-600" />
          <div className="box size-10 bg-indigo-600" />
          <div className="box size-10 bg-indigo-600" />
          <div className="box size-10 bg-indigo-600" />
          <div className="box size-10 bg-indigo-600" />
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={alignCenter}>center</button>
          <button className="px-3 py-1 border rounded" onClick={alignEdges}>edges</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsDistribute;
