import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsInterpolate = () => {
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(100);
  const [p, setP] = useState<number>(0.5);
  const res = gsap.utils.interpolate(start, end, p) as number;
  return (
    <DocumentationLayout>
      <section className="space-y-4 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.interpolate</h1>
          <p className="text-sm text-gray-600">Linearly interpolates between two numbers based on progress 0–1. Example: gsap.utils.interpolate(0, 100, 0.5) → 50</p>
        </header>
        <div className="flex gap-2 items-center">
          <label className="text-sm">start</label>
          <input type="number" value={start} onChange={(e) => setStart(Number(e.target.value))} className="px-2 py-1 border rounded w-24" />
          <label className="text-sm">end</label>
          <input type="number" value={end} onChange={(e) => setEnd(Number(e.target.value))} className="px-2 py-1 border rounded w-24" />
        </div>
        <input type="range" min={0} max={1} step={0.01} value={p} onChange={(e) => setP(Number(e.target.value))} />
        <div className="text-sm">progress: {p.toFixed(2)}</div>
        <div className="text-sm">value: {res}</div>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsInterpolate;
