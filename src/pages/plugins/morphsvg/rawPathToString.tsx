import { useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type MorphSVGStatic = { stringToRawPath?: (d: string) => unknown; rawPathToString?: (rawPath: unknown) => string };

const MorphRawPathToString = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [out, setOut] = useState<string>("");
  const getM = () => (globalThis as { MorphSVGPlugin?: MorphSVGStatic }).MorphSVGPlugin;
  const hasPlugin = Boolean(getM());

  const run = () => {
    const d = pathRef.current?.getAttribute("d") || "";
    const raw = getM()?.stringToRawPath?.(d);
    const str = raw ? getM()?.rawPathToString?.(raw) : "";
    setOut(str || "");
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <svg width="200" height="60">
          <path ref={pathRef} d="M10 30 C60 5, 140 55, 190 30" stroke="currentColor" fill="none" strokeWidth="4" />
        </svg>
        {!hasPlugin && <div className="text-sm text-red-600">MorphSVGPlugin is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{out}</pre>
        <button className="px-3 py-1 border rounded" onClick={run}>rawPathToString</button>
      </section>
    </DocumentationLayout>
  );
};

export default MorphRawPathToString;
