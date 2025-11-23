import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomWiggle } from "gsap/CustomWiggle";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(CustomWiggle);

const CustomWigglePage = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    CustomWiggle.create("myWiggle", { type: "easeOut", wiggles: 6 });
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 300, duration: 1.5, ease: "myWiggle", paused: true });
    }
  }, []);

  const play = () => tweenRef.current?.restart(true);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-indigo-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={play}>play custom wiggle</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default CustomWigglePage;
