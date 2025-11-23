import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const IsActive = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 120, duration: 0.6 });
  }, []);

  const test = () => setActive(Boolean(tlRef.current?.isActive()));

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-slate-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={() => tlRef.current?.play()}>play()</button>
          <button className="px-3 py-1 border rounded" onClick={test}>isActive()</button>
          <div className="text-sm">{active ? "true" : "false"}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default IsActive;
