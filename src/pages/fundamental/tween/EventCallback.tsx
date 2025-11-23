import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const EventCallback = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [msg, setMsg] = useState("none");

  useEffect(() => {
    if (boxRef.current) {
      tweenRef.current = gsap.to(boxRef.current, { x: 150, duration: 1, paused: true });
    }
  }, []);

  const attach = () => {
    const t = tweenRef.current;
    if (!t) return;
    t.eventCallback("onComplete", () => setMsg("completed"));
    t.play();
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-indigo-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={attach}>onComplete → set message</button>
          <div className="text-sm">{msg}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default EventCallback;
