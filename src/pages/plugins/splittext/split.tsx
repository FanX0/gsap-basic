import { useEffect, useRef } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ST = {
  split?: (vars?: unknown) => void;
  revert?: () => void;
};

const SplitMethod = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const stRef = useRef<ST | null>(null);
  const getS = () => (globalThis as { SplitText?: new (el: Element | Element[] | string, vars?: unknown) => ST }).SplitText;
  const hasSplitText = Boolean(getS());

  useEffect(() => {
    const S = getS();
    if (!S || !textRef.current) return;
    stRef.current = new S(textRef.current, { type: "words" });
    return () => {
      stRef.current?.revert?.();
      stRef.current = null;
    };
  }, []);

  const splitChars = () => stRef.current?.split?.({ type: "chars" });
  const splitWordsChars = () => stRef.current?.split?.({ type: "words,chars" });

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <p ref={textRef} className="text-lg">Call split(vars).</p>
        {!hasSplitText && <div className="text-sm text-red-600">SplitText is not available.</div>}
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={splitChars}>split(chars)</button>
          <button className="px-3 py-1 border rounded" onClick={splitWordsChars}>split(words,chars)</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default SplitMethod;
