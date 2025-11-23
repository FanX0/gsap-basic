import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const RegisterEase = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerEase("myEase", (p: number) => p * p);
    if (boxRef.current) gsap.to(boxRef.current, { x: 160, duration: 1.2, ease: "myEase" });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.registerEase</h1>
          <p className="text-sm text-gray-600">Registers a custom ease function by name for use in tweens. Example: gsap.registerEase("myEase", (p) =&gt; p * p)</p>
        </header>
        <div ref={boxRef} className="size-10 bg-lime-600 rounded" />
      </section>
    </DocumentationLayout>
  );
};

export default RegisterEase;
