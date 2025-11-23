import { useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { arrayToRawPath?: (points: Array<number[] | number>) => unknown };

const MPArrayToRawPath = () => {
  const [raw, setRaw] = useState<unknown | null>(null);
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const run = () => setRaw(getMP()?.arrayToRawPath?.([[10, 30], [60, 10], [120, 50], [190, 30]]) ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{raw ? JSON.stringify(raw, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={run}>arrayToRawPath</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPArrayToRawPath;
