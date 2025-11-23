import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsPipe = () => {
  const [v, setV] = useState<number>(50);
  const f = gsap.utils.pipe(
    gsap.utils.clamp(0, 100) as (x: number) => number,
    gsap.utils.mapRange(0, 100, 0, 1) as (x: number) => number
  ) as (x: number) => number;
  const res = f(v);
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.pipe</h1>
          <p className="text-sm text-gray-600">Composes functions left-to-right and returns a single function. Example: const f = gsap.utils.pipe(fnA, fnB)</p>
        </header>
        <input type="range" min={-50} max={150} value={v} onChange={(e) => setV(Number(e.target.value))} />
        <div className="text-sm">value: {v}</div>
        <div className="text-sm">pipe: {res.toFixed(3)}</div>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsPipe;
