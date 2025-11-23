import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { VelocityTracker } from "gsap/utils/VelocityTracker";

const VTGetByTarget = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [exists, setExists] = useState(false);
  const hasPlugin = true;

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    VelocityTracker.track(box, "x");
    return () => VelocityTracker.getByTarget(box!)?.kill?.();
  }, []);

  const read = () => setExists(Boolean(VelocityTracker.getByTarget(boxRef.current!)));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">VelocityTracker.getByTarget</h1>
          <p className="text-sm text-gray-600">Returns the tracker instance associated with a specific target. Use it to inspect or control tracking without holding a reference. Example: VelocityTracker.getByTarget(element)?.kill()</p>
        </header>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">VelocityTracker is not available.</div>}
        <div className="text-sm">getByTarget(): {String(exists)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default VTGetByTarget;
