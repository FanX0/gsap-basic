import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsWrapYoyo = () => {
  const [val, setVal] = useState<number>(0);
  const yy = gsap.utils.wrapYoyo(0, 100) as (x: number) => number;
  const res = yy(val);
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.wrapYoyo</h1>
          <p className="text-sm text-gray-600">Wraps a value in a range while ping-ponging at the edges (like yoyo). Example: const yy = gsap.utils.wrapYoyo(0, 100); yy(120) → 80</p>
        </header>
        <input type="range" min={0} max={200} value={val} onChange={(e) => setVal(Number(e.target.value))} />
        <div className="text-sm">value: {val}</div>
        <div className="text-sm">wrapYoyo: {res}</div>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsWrapYoyo;
