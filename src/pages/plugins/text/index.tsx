import { useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type TextStatic = unknown;

const TextPluginIndex = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const getText = () => (globalThis as { TextPlugin?: TextStatic }).TextPlugin;
  const hasPlugin = Boolean(getText());

  const basic = () => {
    const T = getText();
    const el = boxRef.current;
    if (!T || !el) return;
    gsap.registerPlugin(T);
    gsap.to(el, { duration: 2, text: "This is the new text", ease: "none" });
  };

  const advanced = () => {
    const T = getText();
    const el = boxRef.current;
    if (!T || !el) return;
    gsap.registerPlugin(T);
    gsap.to(el, { duration: 2, text: { value: "This is the new text", delimiter: " " }, ease: "none" });
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="text-sm">Initial text</div>
        {!hasPlugin && <div className="text-sm text-red-600">TextPlugin is not available.</div>}
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={basic}>basic</button>
          <button className="px-3 py-1 border rounded" onClick={advanced}>advanced</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default TextPluginIndex;
