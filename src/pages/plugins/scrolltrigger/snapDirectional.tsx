import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const SnapDirectional = () => {
  const [val, setVal] = useState(0);
  const snap = (dir: number) => setVal(ScrollTrigger.snapDirectional(0.3)(dir));
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="text-sm">snapDirectional: {val.toFixed(2)}</div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 border rounded" onClick={() => snap(1)}>dir +1</button>
          <button className="px-3 py-1 border rounded" onClick={() => snap(-1)}>dir -1</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default SnapDirectional;
