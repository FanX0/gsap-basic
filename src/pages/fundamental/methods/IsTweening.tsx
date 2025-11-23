import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const IsTweening = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { x: 150, duration: 2 });
      const id = setInterval(() => {
        if (boxRef.current) setFlag(gsap.isTweening(boxRef.current));
      }, 100);
      return () => clearInterval(id);
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.isTweening</h1>
          <p className="text-sm text-gray-600">Checks if a target is currently being tweened. Example: gsap.isTweening(el)</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-gray-700 rounded" />
          <div className="text-sm">isTweening: {flag ? "true" : "false"}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default IsTweening;
