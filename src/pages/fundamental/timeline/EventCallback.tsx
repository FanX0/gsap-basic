import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const EventCallback = () => {
  const aRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [msg, setMsg] = useState("none");

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;
    if (aRef.current) tl.to(aRef.current, { x: 120, duration: 0.6 });
  }, []);

  const attach = () => {
    const tl = tlRef.current;
    if (!tl) return;
    tl.eventCallback("onComplete", () => setMsg("completed"));
    tl.play();
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={aRef} className="size-10 bg-cyan-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={attach}>onComplete → set message</button>
          <div className="text-sm">{msg}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default EventCallback;
