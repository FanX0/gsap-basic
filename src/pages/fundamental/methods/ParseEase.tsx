import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const ParseEase = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ease = gsap.parseEase("power2.inOut");
    if (boxRef.current) gsap.to(boxRef.current, { x: 150, duration: 1.2, ease });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.parseEase</h1>
          <p className="text-sm text-gray-600">Parses an ease string into a function you can pass to tweens. Example: const ease = gsap.parseEase("power2.inOut")</p>
        </header>
        <div ref={boxRef} className="size-10 bg-cyan-600 rounded" />
      </section>
    </DocumentationLayout>
  );
};

export default ParseEase;
