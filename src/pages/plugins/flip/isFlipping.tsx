import { useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type FlipStatic = {
  isFlipping?: () => boolean;
};

const FlipIsFlipping = () => {
  const [val, setVal] = useState(false);
  const getFlip = () => (globalThis as { Flip?: FlipStatic }).Flip;
  const hasFlip = Boolean(getFlip());

  const read = () => {
    const Flip = getFlip();
    setVal(Boolean(Flip?.isFlipping?.()));
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        {!hasFlip && <div className="text-sm text-red-600">Flip is not available.</div>}
        <div className="text-sm">isFlipping(): {String(val)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default FlipIsFlipping;
