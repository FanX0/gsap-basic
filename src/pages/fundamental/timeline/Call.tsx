import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Call = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const [msg, setMsg] = useState("-");

  useEffect(() => {
    const tl = gsap.timeline();
    if (aRef.current) tl.to(aRef.current, { x: 120, duration: 0.6 });
    tl.call(() => setMsg("called"));
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-indigo-700 rounded" />
          <div className="text-sm">{msg}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Call;
