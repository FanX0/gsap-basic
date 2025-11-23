import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Snap = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { x: 300, duration: 1.5, snap: { x: 50 } });
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div ref={boxRef} className="size-10 bg-purple-600 rounded" />
        <div className="text-sm">x snaps to 50px increments</div>
      </section>
    </DocumentationLayout>
  );
};

export default Snap;
