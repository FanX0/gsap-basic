import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsWrap = () => {
  const [idx, setIdx] = useState<number>(0);
  const [val, setVal] = useState<number>(120);
  const wrapArray = gsap.utils.wrap(["a", "b", "c"]) as (i: number) => string;
  const wrapRange = gsap.utils.wrap(0, 100) as (x: number) => number;
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.wrap</h1>
          <p className="text-sm text-gray-600">Wraps an index/value around a list or range. Examples: gsap.utils.wrap(["a","b","c"])(i) → cycles letters; gsap.utils.wrap(0, 100)(x) → keeps x within 0–100</p>
        </header>
        <div className="flex gap-2 items-center">
          <label className="text-sm">index</label>
          <input type="number" value={idx} onChange={(e) => setIdx(Number(e.target.value))} className="px-2 py-1 border rounded w-24" />
          <div className="text-sm">array: {wrapArray(idx)}</div>
        </div>
        <div className="flex gap-2 items-center">
          <label className="text-sm">value</label>
          <input type="number" value={val} onChange={(e) => setVal(Number(e.target.value))} className="px-2 py-1 border rounded w-24" />
          <div className="text-sm">range: {wrapRange(val)}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsWrap;
