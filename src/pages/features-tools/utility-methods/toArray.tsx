import { useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsToArray = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [out, setOut] = useState<string>("");
  const run = () => {
    const el = containerRef.current;
    if (!el) return;
    const nodes = el.querySelectorAll("span");
    const arr = gsap.utils.toArray(nodes) as Element[];
    setOut(String(arr.length));
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.toArray</h1>
          <p className="text-sm text-gray-600">Converts array-like collections or selectors to a real array. Example: gsap.utils.toArray(nodeList)</p>
        </header>
        <div ref={containerRef} className="flex gap-2">
          <span className="px-2 py-1 border rounded">one</span>
          <span className="px-2 py-1 border rounded">two</span>
          <span className="px-2 py-1 border rounded">three</span>
        </div>
        <div className="text-sm">length: {out}</div>
        <button className="px-3 py-1 border rounded" onClick={run}>toArray</button>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsToArray;
