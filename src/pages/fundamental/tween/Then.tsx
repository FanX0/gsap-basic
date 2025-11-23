import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Then = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [msg, setMsg] = useState("ready");

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { x: 200, duration: 1 }).then(() => setMsg("completed"));
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-amber-800 rounded" />
          <div className="text-sm">then(): {msg}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Then;
