import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsSnap = () => {
  const [v, setV] = useState<number>(37);
  const resInc = gsap.utils.snap(10, v) as number;
  const snapFn = gsap.utils.snap([0, 25, 50, 75, 100]) as (x: number) => number;
  const resList = snapFn(v);
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.snap</h1>
          <p className="text-sm text-gray-600">Snaps values to increments or closest values in a list. Examples: gsap.utils.snap(10, x) or const s = gsap.utils.snap([0,25,50])</p>
        </header>
        <input type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} />
        <div className="text-sm">value: {v}</div>
        <div className="text-sm">increment: {resInc}</div>
        <div className="text-sm">list: {resList}</div>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsSnap;
