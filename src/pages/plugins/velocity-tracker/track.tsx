import { useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { VelocityTracker } from "gsap/utils/VelocityTracker";

const VTTrack = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const hasPlugin = true;
  const run = () => VelocityTracker.track(boxRef.current!, "x");

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">VelocityTracker.track</h1>
          <p className="text-sm text-gray-600">Starts tracking velocity for one or more properties on a target. Returns an array of tracker instances. Example: const [tracker] = VelocityTracker.track(element, "x", "y")</p>
        </header>
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">VelocityTracker is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={run}>track('x')</button>
      </section>
    </DocumentationLayout>
  );
};

export default VTTrack;
