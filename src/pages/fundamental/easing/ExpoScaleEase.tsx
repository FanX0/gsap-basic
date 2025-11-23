import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SteppedEase, { ExpoScaleEase, SlowMo } from "gsap/EasePack";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(ExpoScaleEase, SlowMo, SteppedEase);

const ExpoScaleEasePage = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ease = ExpoScaleEase.config(0.2, 1);
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 300, duration: 1.5, ease, paused: true });
    }
  }, []);

  const play = () => tweenRef.current?.restart(true);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-green-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={play}>play expoScale ease</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default ExpoScaleEasePage;
