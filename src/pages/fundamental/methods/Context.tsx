import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Context = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box", { x: 120, duration: 1 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.context</h1>
          <p className="text-sm text-gray-600">Scopes selector-based animations to a container and provides cleanup via ctx.revert(). Ideal for component lifecycles.</p>
        </header>
        <div ref={containerRef} className="flex items-center gap-3">
          <div className="box size-10 bg-red-500 rounded" />
          <div className="box size-10 bg-blue-500 rounded" />
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Context;
