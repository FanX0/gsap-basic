import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const To = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) gsap.to(boxRef.current, { rotation: 27, x: 120, duration: 1 });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.to</h1>
          <p className="text-sm text-gray-600">Animates properties to specified end values. Example: gsap.to(el, &#123; x: 120, duration: 1 &#125;)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-slate-800 rounded" />
          <div className="text-sm">gsap.to()</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default To;
