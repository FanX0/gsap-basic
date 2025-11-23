import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Vars = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [vars, setVars] = useState<Record<string, unknown>>({});

  useEffect(() => {
    if (aRef.current) tlRef.current = gsap.timeline({ defaults: { duration: 0.6 } }).to(aRef.current, { x: 120 });
  }, []);

  const read = () => setVars((tlRef.current?.vars ?? {}) as Record<string, unknown>);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-orange-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={read}>read vars</button>
        </div>
        <pre className="text-xs bg-gray-100 p-2 rounded">{JSON.stringify(vars, null, 2)}</pre>
      </section>
    </DocumentationLayout>
  );
};

export default Vars;
