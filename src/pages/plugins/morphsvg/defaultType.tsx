import { useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MorphSVGStatic = { defaultType?: unknown };

const MorphDefaultType = () => {
  const [val, setVal] = useState<unknown | null>(null);
  const getM = () => (globalThis as { MorphSVGPlugin?: MorphSVGStatic }).MorphSVGPlugin;
  const hasPlugin = Boolean(getM());

  const read = () => setVal(getM()?.defaultType ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        {!hasPlugin && <div className="text-sm text-red-600">MorphSVGPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{val ? JSON.stringify(val, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default MorphDefaultType;
