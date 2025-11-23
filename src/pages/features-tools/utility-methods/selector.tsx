import { useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsSelector = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState<number>(0);
  const run = () => {
    const el = containerRef.current;
    if (!el) return;
    const q = gsap.utils.selector(el) as (s: string) => Element[];
    const nodes = q(".box");
    setCount(nodes.length);
    gsap.to(nodes, { backgroundColor: "#2563eb", duration: 0.3 });
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.selector</h1>
          <p className="text-sm text-gray-600">Creates a scoped selector function for querying within a container element. Example: const q = gsap.utils.selector(container); q('.box')</p>
        </header>
        <div ref={containerRef} className="flex gap-2">
          <div className="box size-10 bg-indigo-600" />
          <div className="box size-10 bg-indigo-600" />
          <div className="box size-10 bg-indigo-600" />
        </div>
        <div className="text-sm">selected: {count}</div>
        <button className="px-3 py-1 border rounded" onClick={run}>selector</button>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsSelector;
