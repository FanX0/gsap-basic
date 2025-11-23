import { useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsCheckPrefix = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [out, setOut] = useState<string>("");
  const run = () => {
    const el = inputRef.current;
    const v = el?.value ?? "transform";
    const res = gsap.utils.checkPrefix(v) as string;
    setOut(String(res));
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.checkPrefix</h1>
          <p className="text-sm text-gray-600">Detects the correct vendor-prefixed CSS property name for the current environment. Example: gsap.utils.checkPrefix("transform")</p>
        </header>
        <input ref={inputRef} defaultValue="transform" className="px-3 py-1 border rounded" />
        <div className="text-sm">{out}</div>
        <button className="px-3 py-1 border rounded" onClick={run}>checkPrefix</button>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsCheckPrefix;
