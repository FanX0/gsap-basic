import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Effects = () => {
  const box1Ref = useRef<HTMLDivElement | null>(null);
  const box2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerEffect({
      name: "fade",
      effect: (targets: gsap.TweenTarget, config: { duration: number }) =>
        gsap.to(targets, { duration: config.duration, opacity: 0 }),
      defaults: { duration: 1 },
      extendTimeline: true,
    });

    if (box1Ref.current) {
      gsap.effects.fade(box1Ref.current, { duration: 1 });
    }

    const tl = gsap.timeline();
    if (box2Ref.current) {
      tl.fade(box2Ref.current, { duration: 0.75 });
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.effects</h1>
          <p className="text-sm text-gray-600">Access registered effects by name or via timeline extension when extendTimeline is true. Useful for reusable animation patterns.</p>
        </header>
        <div className="flex items-center gap-4">
          <div ref={box1Ref} className="size-16 bg-slate-800 rounded-md" />
          <div className="text-sm">gsap.effects.fade()</div>
        </div>
        <div className="flex items-center gap-4">
          <div ref={box2Ref} className="size-16 bg-indigo-600 rounded-md" />
          <div className="text-sm">timeline.fade()</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Effects;
