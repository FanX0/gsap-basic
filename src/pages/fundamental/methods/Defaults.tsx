import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Defaults = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const bRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.defaults({ duration: 0.8, ease: "power1.out" });
    if (aRef.current) gsap.to(aRef.current, { x: 120 });
    if (bRef.current) gsap.to(bRef.current, { x: 160 });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.defaults</h1>
          <p className="text-sm text-gray-600">Sets default tween vars for subsequent animations. Example: gsap.defaults(&#123; duration: 0.8, ease: "power1.out" &#125;)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-green-500 rounded" />
          <div ref={bRef} className="size-10 bg-yellow-500 rounded" />
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Defaults;
