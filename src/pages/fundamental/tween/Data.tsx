import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Data = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [value, setValue] = useState<string>("-");

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 150, duration: 1, data: { note: "hello" } });
    }
  }, []);

  const read = () => {
    const d = tweenRef.current?.data as { note?: string } | undefined;
    setValue(d?.note ?? "-");
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-slate-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={read}>read data.note</button>
          <div className="text-sm">{value}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Data;
