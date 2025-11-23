import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Config = () => {
  const [nullWarnOff, setNullWarnOff] = useState(false);

  const toggleNullWarn = () => {
    const next = !nullWarnOff;
    gsap.config({ nullTargetWarn: !next ? true : false });
    setNullWarnOff(next);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.config</h1>
          <p className="text-sm text-gray-600">Sets global configuration for GSAP behavior. Example: gsap.config(&#123; nullTargetWarn: false &#125;)</p>
        </header>
        <h2 className="text-lg font-semibold">gsap.config()</h2>
        <button className="px-3 py-1 border rounded" onClick={toggleNullWarn}>
          nullTargetWarn: {nullWarnOff ? "off" : "on"}
        </button>
      </section>
    </DocumentationLayout>
  );
};

export default Config;
