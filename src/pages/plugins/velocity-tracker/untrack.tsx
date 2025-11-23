import { useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { VelocityTracker } from "gsap/utils/VelocityTracker";

const VTUntrack = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const hasPlugin = true;
  const run = () => VelocityTracker.untrack(boxRef.current!, "x");

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">VelocityTracker.untrack</h1>
          <p className="text-sm text-gray-600">Stops tracking velocity for the given properties on a target. Use after you're done reading velocity to clean up. Example: VelocityTracker.untrack(element, "x")</p>
        </header>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">VelocityTracker is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={run}>untrack('x')</button>
      </section>
    </DocumentationLayout>
  );
};

export default VTUntrack;
