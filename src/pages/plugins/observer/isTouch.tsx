import { useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ObserverStatic = { isTouch?: () => boolean };

const ObserverIsTouch = () => {
  const [val, setVal] = useState(false);
  const getObs = () => (globalThis as { Observer?: ObserverStatic }).Observer;
  const hasPlugin = Boolean(getObs());
  const read = () => setVal(Boolean(getObs()?.isTouch?.()));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        {!hasPlugin && <div className="text-sm text-red-600">Observer is not available.</div>}
        <div className="text-sm">isTouch(): {String(val)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default ObserverIsTouch;
