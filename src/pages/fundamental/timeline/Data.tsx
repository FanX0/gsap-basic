import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Data = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [note, setNote] = useState("-");

  useEffect(() => {
    if (aRef.current) {
      tlRef.current = gsap.timeline({ data: { note: "timeline" } }).to(aRef.current, { x: 120 });
    }
  }, []);

  const read = () => {
    const d = tlRef.current?.data as { note?: string } | undefined;
    setNote(d?.note ?? "-");
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-slate-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={read}>read data.note</button>
          <div className="text-sm">{note}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Data;
