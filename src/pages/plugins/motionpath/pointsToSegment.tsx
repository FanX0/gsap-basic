import { useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { pointsToSegment?: (p1: number[], p2: number[], p3?: number[], p4?: number[]) => unknown };

const MPPointsToSegment = () => {
  const [seg, setSeg] = useState<unknown | null>(null);
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const run = () => setSeg(getMP()?.pointsToSegment?.([10, 30], [190, 30]) ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{seg ? JSON.stringify(seg, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={run}>pointsToSegment</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPPointsToSegment;
