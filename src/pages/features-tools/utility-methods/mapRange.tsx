import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsMapRange = () => {
  const [v, setV] = useState<number>(50);
  const res = gsap.utils.mapRange(0, 100, 0, 500, v) as number;
  const fn = gsap.utils.mapRange(0, 100, 0, 500) as (x: number) => number;
  const resFn = fn(v);
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.mapRange</h1>
          <p className="text-sm text-gray-600">Maps a value from one numeric range into another. Example: gsap.utils.mapRange(0, 100, 0, 500, x)</p>
        </header>
        <input type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} />
        <div className="text-sm">value: {v}</div>
        <div className="text-sm">direct: {res}</div>
        <div className="text-sm">function: {resFn}</div>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsMapRange;
