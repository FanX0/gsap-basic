import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { VelocityTracker } from "gsap/utils/VelocityTracker";

const VTIsTracking = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [val, setVal] = useState(false);
  const hasPlugin = true;

  const read = () => setVal(Boolean(VelocityTracker.isTracking(boxRef.current!)));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">VelocityTracker.isTracking</h1>
          <p className="text-sm text-gray-600">Checks whether a target is currently being tracked, optionally for a specific property. Example: VelocityTracker.isTracking(element) or VelocityTracker.isTracking(element, "x")</p>
        </header>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">VelocityTracker is not available.</div>}
        <div className="text-sm">isTracking(): {String(val)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default VTIsTracking;
