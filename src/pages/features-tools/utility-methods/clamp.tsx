import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsClamp = () => {
  const [val, setVal] = useState<number>(0);
  const resDirect = gsap.utils.clamp(-50, 50, val) as number;
  const fn = gsap.utils.clamp(-50, 50) as (v: number) => number;
  const resFn = fn(val);
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.clamp</h1>
          <p className="text-sm text-gray-600">Clamp a number to a range or create a clamping function. Example: gsap.utils.clamp(-50, 50, x) or const clamp = gsap.utils.clamp(-50, 50)</p>
        </header>
        <input type="range" min={-200} max={200} value={val} onChange={(e) => setVal(Number(e.target.value))} />
        <div className="text-sm">value: {val}</div>
        <div className="text-sm">direct: {resDirect}</div>
        <div className="text-sm">function: {resFn}</div>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsClamp;
