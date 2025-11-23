import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const MaxScroll = () => {
  const [val, setVal] = useState(0);
  const read = () => setVal(ScrollTrigger.maxScroll(window));
  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div className="text-sm">maxScroll(window): {val}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default MaxScroll;
