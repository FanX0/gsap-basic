import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { VelocityTracker } from "gsap/utils/VelocityTracker";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type VTInstance = { get?: (prop: string) => number; kill?: () => void };

const VTGet = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<VTInstance | null>(null);
  const [val, setVal] = useState(0);
  const hasPlugin = true;

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    instRef.current = (VelocityTracker.track(box, "x")[0] as VTInstance) || null;
    const t = gsap.to(box, { x: 200, duration: 0.5 });
    return () => {
      t.kill();
      instRef.current?.kill?.();
    };
  }, []);

  const read = () => setVal(Number(instRef.current?.get?.("x") || 0));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">VelocityTracker instance.get</h1>
          <p className="text-sm text-gray-600">Reads the current velocity for a tracked property from a tracker instance returned by track(). Example: tracker.get("x")</p>
        </header>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">VelocityTracker is not available.</div>}
        <div className="text-sm">get('x'): {val.toFixed(2)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default VTGet;
