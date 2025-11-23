import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const NormalizeScroll = () => {
  const [on, setOn] = useState(false);
  const toggle = () => {
    ScrollTrigger.normalizeScroll(!on);
    setOn(!on);
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="text-sm">normalizeScroll: {on ? "true" : "false"}</div>
        <button className="px-3 py-1 border rounded" onClick={toggle}>toggle</button>
      </section>
    </DocumentationLayout>
  );
};

export default NormalizeScroll;
