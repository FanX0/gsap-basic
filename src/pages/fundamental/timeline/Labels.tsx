import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "../../../components/layouts/DocumentationLayout";

const Labels = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const bRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 120, duration: 0.6 });
    tl.addLabel("mid");
    if (bRef.current) tl.to(bRef.current, { x: 120, duration: 0.6 });
  }, []);

  const gotoMid = () => tlRef.current?.seek("mid");
  const readLabels = () => {
    const tl = tlRef.current;
    if (!tl) return;
    setLabels(tl.getLabelsArray().map((l: { name: string }) => l.name));
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-green-700 rounded" />
          <div ref={bRef} className="size-10 bg-blue-700 rounded" />
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm">labels: {labels.join(", ")}</div>
          <button className="px-3 py-1 border rounded" onClick={readLabels}>
            read labels
          </button>
          <button className="px-3 py-1 border rounded" onClick={gotoMid}>
            seek("mid")
          </button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Labels;