import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MPPStatic = { stringToRawPath?: (d: string) => unknown; rawPathToString?: (raw: unknown) => string };

const MPRawPathToString = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [out, setOut] = useState<string>("");
  const getMP = () => (globalThis as { MotionPathPlugin?: MPPStatic }).MotionPathPlugin;
  const hasPlugin = Boolean(getMP());
  const run = () => {
    const d = pathRef.current?.getAttribute("d") || "";
    const raw = getMP()?.stringToRawPath?.(d);
    const str = raw ? getMP()?.rawPathToString?.(raw) : "";
    setOut(str || "");
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 C60 5, 140 55, 190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        {!hasPlugin && <div className="text-sm text-red-600">MotionPathPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{out}</pre>
        <button className="px-3 py-1 border rounded" onClick={run}>rawPathToString</button>
      </section>
    </DocumentationLayout>
  );
};

export default MPRawPathToString;
