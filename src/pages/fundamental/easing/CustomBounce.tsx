import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomBounce } from "gsap/CustomBounce";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

gsap.registerPlugin(CustomBounce);

const CustomBouncePage = () => {
  const ballRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    CustomBounce.create("myBounce", { strength: 0.6, squash: 3 });
    if (ballRef.current) {
      tweenRef.current = gsap.to(ballRef.current, { y: 200, duration: 1.2, ease: "myBounce", paused: true, repeat: 1, yoyo: true });
    }
  }, []);

  const play = () => tweenRef.current?.restart(true);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="h-56 flex items-start">
          <div ref={ballRef} className="size-10 bg-red-600 rounded-full" />
        </div>
        <button className="px-3 py-1 border rounded" onClick={play}>play custom bounce</button>
      </section>
    </DocumentationLayout>
  );
};

export default CustomBouncePage;
