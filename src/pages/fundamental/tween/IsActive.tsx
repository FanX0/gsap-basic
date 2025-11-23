import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const IsActive = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 150, duration: 1 });
      const id = setInterval(() => setActive(tweenRef.current?.isActive() ?? false), 100);
      return () => clearInterval(id);
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-gray-700 rounded" />
          <div className="text-sm">isActive(): {active ? "true" : "false"}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default IsActive;
