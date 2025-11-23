import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const RegisterEffect = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerEffect({
      name: "fade",
      effect: (targets: gsap.TweenTarget, config: { duration: number }) =>
        gsap.to(targets, { duration: config.duration, opacity: 0 }),
      defaults: { duration: 1 },
      extendTimeline: true,
    });
    if (boxRef.current) gsap.effects.fade(boxRef.current, { duration: 0.8 });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.registerEffect</h1>
          <p className="text-sm text-gray-600">Defines a reusable effect with defaults that can be called via gsap.effects.name. Example: gsap.registerEffect(&#123; name: "fade", effect: (targets, config) =&gt; gsap.to(targets, &#123; opacity: 0, duration: config.duration &#125;) &#125;)</p>
        </header>
        <div ref={boxRef} className="size-10 bg-slate-800 rounded" />
      </section>
    </DocumentationLayout>
  );
};

export default RegisterEffect;
