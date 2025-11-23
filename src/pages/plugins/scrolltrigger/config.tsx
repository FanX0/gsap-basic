import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Config = () => {
  const [done, setDone] = useState(false);
  const setCfg = () => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    setDone(true);
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="text-sm">configured: {done ? "true" : "false"}</div>
        <button className="px-3 py-1 border rounded" onClick={setCfg}>config()</button>
      </section>
    </DocumentationLayout>
  );
};

export default Config;
