import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const IsTouch = () => {
  const [val, setVal] = useState(false);
  const read = () => setVal(Boolean(ScrollTrigger.isTouch));
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="flex items-center gap-3">
          <div className="text-sm">isTouch: {val ? "true" : "false"}</div>
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default IsTouch;
