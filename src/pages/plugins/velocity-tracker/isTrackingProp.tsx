import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { VelocityTracker } from "gsap/utils/VelocityTracker";

const VTIsTrackingProp = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [val, setVal] = useState(false);
  const hasPlugin = true;

  const read = () => setVal(Boolean(VelocityTracker.isTracking(boxRef.current!, "x")));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">VelocityTracker.isTracking (property)</h1>
          <p className="text-sm text-gray-600">Checks whether a specific property is tracked on a target. Example: VelocityTracker.isTracking(element, "x")</p>
        </header>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">VelocityTracker is not available.</div>}
        <div className="text-sm">isTrackingProp('x'): {String(val)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default VTIsTrackingProp;
