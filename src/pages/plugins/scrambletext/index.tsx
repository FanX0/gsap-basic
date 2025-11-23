import { useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ScrambleStatic = unknown;

const ScrambleTextIndex = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const getST = () => (globalThis as { ScrambleTextPlugin?: ScrambleStatic }).ScrambleTextPlugin;
  const hasPlugin = Boolean(getST());

  const basic = () => {
    const ST = getST();
    const el = boxRef.current;
    if (!ST || !el) return;
    gsap.registerPlugin(ST);
    gsap.to(el, { duration: 1, scrambleText: "THIS IS NEW TEXT" });
  };

  const custom = () => {
    const ST = getST();
    const el = boxRef.current;
    if (!ST || !el) return;
    gsap.registerPlugin(ST);
    gsap.to(el, { duration: 1.5, scrambleText: { text: "NEW TEXT", chars: "XO", revealDelay: 0.5, speed: 0.3 } });
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="text-sm">loading...</div>
        {!hasPlugin && <div className="text-sm text-red-600">ScrambleTextPlugin is not available.</div>}
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={basic}>basic</button>
          <button className="px-3 py-1 border rounded" onClick={custom}>custom</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default ScrambleTextIndex;
