import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Vars = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [vars, setVars] = useState<Record<string, unknown>>({});

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 120, duration: 1, ease: "power1.out" });
    }
  }, []);

  const read = () => {
    const v = (tweenRef.current?.vars ?? {}) as Record<string, unknown>;
    setVars(v);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-orange-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={read}>read vars</button>
        </div>
        <pre className="text-xs bg-gray-100 p-2 rounded">{JSON.stringify(vars, null, 2)}</pre>
      </section>
    </DocumentationLayout>
  );
};

export default Vars;
