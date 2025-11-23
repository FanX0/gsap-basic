import { useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsGetUnit = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [unit, setUnit] = useState<string>("");
  const run = () => {
    const v = inputRef.current?.value ?? "100px";
    const u = gsap.utils.getUnit(v) as string;
    setUnit(u ?? "");
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.getUnit</h1>
          <p className="text-sm text-gray-600">Extracts the unit from a string value like "100px" or "2rem". Example: gsap.utils.getUnit("100px")</p>
        </header>
        <input ref={inputRef} defaultValue="100px" className="px-3 py-1 border rounded" />
        <div className="text-sm">{unit}</div>
        <button className="px-3 py-1 border rounded" onClick={run}>getUnit</button>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsGetUnit;
