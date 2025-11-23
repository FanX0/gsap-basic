import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(CustomEase);

const CustomEasePage = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    CustomEase.create("myEase", "M0,0 C0.2,0.8 0.4,1 1,1");
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 300, duration: 1.5, ease: "myEase", paused: true });
    }
  }, []);

  const play = () => tweenRef.current?.restart(true);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-slate-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={play}>play custom ease</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default CustomEasePage;
