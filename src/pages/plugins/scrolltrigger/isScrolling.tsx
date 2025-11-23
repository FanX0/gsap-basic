import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const IsScrolling = () => {
  const [val, setVal] = useState(false);
  const read = () => setVal(Boolean(ScrollTrigger.isScrolling()));
  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div className="text-sm">isScrolling(): {val ? "true" : "false"}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default IsScrolling;
