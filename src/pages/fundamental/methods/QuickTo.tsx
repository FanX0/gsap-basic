import { useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const QuickTo = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  const move = (x: number) => {
    if (!boxRef.current) return;
    const q = gsap.quickTo(boxRef.current, "x", { duration: 0.4 });
    q(x);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.quickTo</h1>
          <p className="text-sm text-gray-600">Creates a function that animates a property to a given value efficiently. Example: const q = gsap.quickTo(el, "x", &#123; duration: 0.4 &#125;); q(120)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-rose-600 rounded" />
          <button className="px-3 py-1 border rounded" onClick={() => move(50)}>x=50</button>
          <button className="px-3 py-1 border rounded" onClick={() => move(120)}>x=120</button>
          <button className="px-3 py-1 border rounded" onClick={() => move(180)}>x=180</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default QuickTo;
