import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Observe = () => {
  const areaRef = useRef<HTMLDivElement | null>(null);
  const [msg, setMsg] = useState("-");

  useEffect(() => {
    if (!areaRef.current) return;
    const obs = ScrollTrigger.observe({ target: areaRef.current, type: "wheel,touch", onChange: () => setMsg("changed") });
    return () => obs?.disable();
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={areaRef} className="h-40 bg-gray-200 rounded flex items-center justify-center">observe area</div>
        <div className="text-sm">{msg}</div>
      </section>
    </DocumentationLayout>
  );
};

export default Observe;
