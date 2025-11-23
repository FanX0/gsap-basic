import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Reverse = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 1 });
  }, []);

  const reverse = () => tweenRef.current?.reverse();

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-red-800 rounded" />
          <button className="px-3 py-1 border rounded" onClick={reverse}>reverse()</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Reverse;
