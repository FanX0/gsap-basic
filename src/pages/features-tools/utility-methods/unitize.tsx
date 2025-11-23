import { useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsUnitize = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [v, setV] = useState<number>(50);
  const f = gsap.utils.unitize(gsap.utils.mapRange(0, 100, 0, 300) as (x: number) => number, "px") as (x: number) => string;
  const apply = () => {
    const el = boxRef.current;
    if (!el) return;
    gsap.set(el, { x: f(v) });
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.unitize</h1>
          <p className="text-sm text-gray-600">Wraps a function’s numeric output with a unit string, returning a function that outputs values like "123px". Example: const f = gsap.utils.unitize(mapFn, "px"); gsap.set(el, &#123; x: f(value) &#125;)</p>
        </header>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        <input type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} />
        <div className="text-sm">value: {v}</div>
        <button className="px-3 py-1 border rounded" onClick={apply}>apply</button>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsUnitize;
