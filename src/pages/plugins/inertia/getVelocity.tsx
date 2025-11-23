import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type InertiaStatic = {
  track?: (target: Element | object, props?: string | string[]) => void;
  getVelocity?: (target: Element | object, prop: string) => number;
};

const InertiaGetVelocity = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [vel, setVel] = useState(0);
  const getI = () => (globalThis as { InertiaPlugin?: InertiaStatic }).InertiaPlugin;
  const hasPlugin = Boolean(getI());

  useEffect(() => {
    const I = getI();
    const box = boxRef.current;
    if (!I || !box) return;
    gsap.registerPlugin(I);
    I.track?.(box, "x");
    const tween = gsap.to(box, { x: 200, duration: 0.5 });
    return () => { tween.kill(); };
  }, []);

  const read = () => setVel(Number(getI()?.getVelocity?.(boxRef.current!, "x") || 0));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">InertiaPlugin is not available.</div>}
        <div className="text-sm">getVelocity('x'): {vel.toFixed(2)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default InertiaGetVelocity;
