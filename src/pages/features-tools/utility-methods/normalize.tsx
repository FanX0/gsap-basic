import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsNormalize = () => {
  const [v, setV] = useState<number>(50);
  const res = gsap.utils.normalize(0, 100, v) as number;
  const fn = gsap.utils.normalize(0, 100) as (x: number) => number;
  const resFn = fn(v);
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.normalize</h1>
          <p className="text-sm text-gray-600">Normalizes a value in a range into 0–1. Example: gsap.utils.normalize(0, 100, x)</p>
        </header>
        <input type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} />
        <div className="text-sm">value: {v}</div>
        <div className="text-sm">direct: {res.toFixed(3)}</div>
        <div className="text-sm">function: {resFn.toFixed(3)}</div>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsNormalize;
