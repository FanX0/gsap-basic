import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { VelocityTracker } from "gsap/utils/VelocityTracker";
type VTInstance = { add?: (prop: string) => void; remove?: (prop: string) => void; kill?: () => void };

const VTRemoveProp = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<VTInstance | null>(null);
  const [tracked, setTracked] = useState(false);
  const hasPlugin = true;

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const inst = (VelocityTracker.track(box, "x")[0] as VTInstance) || null;
    instRef.current = inst;
    inst?.add?.("y");
    return () => instRef.current?.kill?.();
  }, []);

  const remove = () => {
    instRef.current?.remove?.("y");
    setTracked(Boolean(VelocityTracker.isTracking(boxRef.current!, "y")));
  };
  const read = () => setTracked(Boolean(VelocityTracker.isTracking(boxRef.current!, "y")));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">Tracker.remove</h1>
          <p className="text-sm text-gray-600">Remove a property from a tracker instance so it is no longer tracked. Example: tracker.remove("y")</p>
        </header>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">VelocityTracker is not available.</div>}
        <div className="text-sm">isTrackingProp('y'): {String(tracked)}</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={read}>read</button>
          <button className="px-3 py-1 border rounded" onClick={remove}>removeProp('y')</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default VTRemoveProp;
