import { useEffect, useRef, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ST = {
  lines?: Element[];
  revert?: () => void;
};

const Lines = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const stRef = useRef<ST | null>(null);
  const [count, setCount] = useState(0);
  const getS = () => (globalThis as { SplitText?: new (el: Element | Element[] | string, vars?: unknown) => ST }).SplitText;
  const hasSplitText = Boolean(getS());

  useEffect(() => {
    const S = getS();
    if (!S || !textRef.current) return;
    stRef.current = new S(textRef.current, { type: "lines" });
    return () => {
      stRef.current?.revert?.();
      stRef.current = null;
    };
  }, []);

  const read = () => setCount(stRef.current?.lines?.length ?? 0);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <p ref={textRef} className="text-lg w-64">Split into multiple lines by wrapping width. This should create lines.</p>
        {!hasSplitText && <div className="text-sm text-red-600">SplitText is not available.</div>}
        <div className="text-sm">lines.length: {count}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default Lines;
