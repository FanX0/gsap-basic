import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ST = {
  vars?: unknown;
  revert?: () => void;
};

const Vars = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const stRef = useRef<ST | null>(null);
  const [vars, setVars] = useState<unknown | null>(null);
  const getS = () => (globalThis as { SplitText?: new (el: Element | Element[] | string, vars?: unknown) => ST }).SplitText;
  const hasSplitText = Boolean(getS());

  useEffect(() => {
    const S = getS();
    if (!S || !textRef.current) return;
    stRef.current = new S(textRef.current, { type: "words,chars", tag: "div" });
    return () => {
      stRef.current?.revert?.();
      stRef.current = null;
    };
  }, []);

  const read = () => setVars(stRef.current?.vars ?? null);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <p ref={textRef} className="text-lg">Read vars.</p>
        {!hasSplitText && <div className="text-sm text-red-600">SplitText is not available.</div>}
        <pre className="text-xs whitespace-pre-wrap">{vars ? JSON.stringify(vars, null, 2) : ""}</pre>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default Vars;
