import { useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const QuickSetter = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  const setX = () => {
    if (!boxRef.current) return;
    const setter = gsap.quickSetter(boxRef.current, "x", "px");
    setter(120);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.quickSetter</h1>
          <p className="text-sm text-gray-600">Creates a fast setter function for a specific property on a target. Example: const setX = gsap.quickSetter(el, "x", "px"); setX(120)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-fuchsia-600 rounded" />
          <button className="px-3 py-1 border rounded" onClick={setX}>quickSetter to 120px</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default QuickSetter;
