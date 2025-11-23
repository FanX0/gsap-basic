import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(RoughEase);

const RoughEasePage = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ease = RoughEase.ease.config({ strength: 1, points: 20, randomize: true, taper: "none" });
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 300, duration: 1.2, ease, paused: true });
    }
  }, []);

  const play = () => tweenRef.current?.restart(true);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-orange-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={play}>play rough ease</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default RoughEasePage;
