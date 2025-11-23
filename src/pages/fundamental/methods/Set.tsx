import { useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Set = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const apply = () => {
    if (boxRef.current) gsap.set(boxRef.current, { x: 100 });
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.set</h1>
          <p className="text-sm text-gray-600">Instantly sets properties without animation. Example: gsap.set(el, &#123; x: 100 &#125;)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-black rounded" />
          <button className="px-3 py-1 border rounded" onClick={apply}>set x=100</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Set;
