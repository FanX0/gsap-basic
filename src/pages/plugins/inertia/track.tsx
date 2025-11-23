import { useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type InertiaStatic = { track?: (target: Element | object, props?: string | string[]) => void };

const InertiaTrack = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const getI = () => (globalThis as { InertiaPlugin?: InertiaStatic }).InertiaPlugin;
  const hasPlugin = Boolean(getI());

  const run = () => getI()?.track?.(boxRef.current!, "x");

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">InertiaPlugin is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={run}>track('x')</button>
      </section>
    </DocumentationLayout>
  );
};

export default InertiaTrack;
