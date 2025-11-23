import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const Direction = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [dir, setDir] = useState(0);

  useEffect(() => {
    if (!boxRef.current) return;
    ScrollTrigger.create({
      trigger: boxRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onUpdate: (self) => setDir(self.direction),
    });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-blue-700 rounded" />
        <div className="text-sm">direction: {dir}</div>
      </section>
    </DocumentationLayout>
  );
};

export default Direction;
