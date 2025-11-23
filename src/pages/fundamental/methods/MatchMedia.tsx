import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const MatchMedia = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
      if (boxRef.current) gsap.to(boxRef.current, { x: 200, duration: 1 });
    });
    mm.add("(max-width: 799px)", () => {
      if (boxRef.current) gsap.to(boxRef.current, { x: 80, duration: 1 });
    });
    return () => mm.revert();
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.matchMedia</h1>
          <p className="text-sm text-gray-600">Creates a media query manager for responsive animation logic. Example: const mm = gsap.matchMedia(); mm.add("(min-width: 800px)", () =&gt; gsap.to(el, &#123; x: 200 &#125;))</p>
        </header>
        <div ref={boxRef} className="size-10 bg-blue-600 rounded" />
      </section>
    </DocumentationLayout>
  );
};

export default MatchMedia;
