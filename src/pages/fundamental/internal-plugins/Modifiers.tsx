import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Modifiers = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: 500,
        duration: 2,
        modifiers: {
          x: (value: string) => {
            const n = parseFloat(value);
            const wrapped = gsap.utils.wrap(0, 100, n);
            return `${wrapped}px`;
          },
        },
      });
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div ref={boxRef} className="size-10 bg-blue-600 rounded" />
        <div className="text-sm">x wraps between 0 and 100</div>
      </section>
    </DocumentationLayout>
  );
};

export default Modifiers;
