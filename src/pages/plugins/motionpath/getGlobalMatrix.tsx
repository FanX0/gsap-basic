import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { getGlobalMatrix?: (target: Element, inverse?: boolean) => unknown };

const MPGetGlobalMatrix = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [mat, setMat] = useState<unknown | null>(null);
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const read = () => setMat(getMP()?.getGlobalMatrix?.(boxRef.current!, false) ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{mat ? JSON.stringify(mat, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={read}>getGlobalMatrix</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPGetGlobalMatrix;
