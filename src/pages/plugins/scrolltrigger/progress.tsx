import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ScrollTrigger);

const Progress = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!boxRef.current) return;
    ScrollTrigger.create({ trigger: boxRef.current, start: "top bottom", end: "bottom top", onUpdate: (self) => setProgress(self.progress) });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-6 h-[150vh] pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-700 rounded" />
        <div className="text-sm">progress: {progress.toFixed(2)}</div>
      </section>
    </DocumentationLayout>
  );
};

export default Progress;
