import { useEffect, useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { VelocityTracker } from "gsap/utils/VelocityTracker";
type VTInstance = { add?: (prop: string) => void; kill?: () => void };

const VTAddProp = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const instRef = useRef<VTInstance | null>(null);
  const hasPlugin = true;

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    instRef.current = (VelocityTracker.track(box, "x")[0] as VTInstance) || null;
    return () => instRef.current?.kill?.();
  }, []);

  const add = () => instRef.current?.add?.("y");

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">Tracker.add</h1>
          <p className="text-sm text-gray-600">Add a property to an existing tracker instance created by track(). Example: tracker.add("y")</p>
        </header>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">VelocityTracker is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={add}>addProp('y')</button>
      </section>
    </DocumentationLayout>
  );
};

export default VTAddProp;
