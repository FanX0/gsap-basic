import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ST = {
  isSplit?: boolean;
  revert?: () => void;
};

const RevertMethod = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const stRef = useRef<ST | null>(null);
  const [val, setVal] = useState(false);
  const getS = () => (globalThis as { SplitText?: new (el: Element | Element[] | string, vars?: unknown) => ST }).SplitText;
  const hasSplitText = Boolean(getS());

  useEffect(() => {
    const S = getS();
    if (!S || !textRef.current) return;
    stRef.current = new S(textRef.current, { type: "chars" });
    return () => {
      stRef.current?.revert?.();
      stRef.current = null;
    };
  }, []);

  const read = () => setVal(Boolean(stRef.current?.isSplit));
  const revert = () => stRef.current?.revert?.();

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <p ref={textRef} className="text-lg">Use revert().</p>
        {!hasSplitText && <div className="text-sm text-red-600">SplitText is not available.</div>}
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={read}>isSplit</button>
          <button className="px-3 py-1 border rounded" onClick={revert}>revert()</button>
        </div>
        <div className="text-sm">isSplit: {String(val)}</div>
      </section>
    </DocumentationLayout>
  );
};

export default RevertMethod;
