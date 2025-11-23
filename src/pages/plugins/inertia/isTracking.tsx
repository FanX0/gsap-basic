import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type InertiaStatic = { isTracking?: (target: Element | object, prop?: string) => boolean };

const InertiaIsTracking = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [val, setVal] = useState(false);
  const getI = () => (globalThis as { InertiaPlugin?: InertiaStatic }).InertiaPlugin;
  const hasPlugin = Boolean(getI());

  const read = () => setVal(Boolean(getI()?.isTracking?.(boxRef.current!, "x")));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">InertiaPlugin is not available.</div>}
        <div className="text-sm">isTracking('x'): {String(val)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default InertiaIsTracking;
