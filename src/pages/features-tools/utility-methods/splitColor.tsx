import { useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsSplitColor = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [rgb, setRgb] = useState<number[]>([]);
  const [hsl, setHsl] = useState<number[]>([]);
  const run = () => {
    const v = inputRef.current?.value ?? "#ff9933";
    const a = gsap.utils.splitColor(v) as number[];
    const b = gsap.utils.splitColor(v, true) as number[];
    setRgb(a);
    setHsl(b);
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.splitColor</h1>
          <p className="text-sm text-gray-600">Parses a color into numeric components. Returns RGB by default or HSL when second argument is true. Example: gsap.utils.splitColor("#ff9933", true)</p>
        </header>
        <input ref={inputRef} defaultValue="#ff9933" className="px-3 py-1 border rounded" />
        <div className="text-sm">rgb: {rgb.join(", ")}</div>
        <div className="text-sm">hsl: {hsl.join(", ")}</div>
        <button className="px-3 py-1 border rounded" onClick={run}>splitColor</button>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsSplitColor;
