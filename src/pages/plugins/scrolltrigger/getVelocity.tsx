import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const GetVelocity = () => {
  const stRef = useRef<ScrollTrigger | null>(null);
  const [vel, setVel] = useState(0);

  useEffect(() => {
    stRef.current = ScrollTrigger.create({ start: "top top" });
  }, []);

  const read = () => setVel(stRef.current?.getVelocity() ?? 0);

  return (
    <DocumentationLayout>
      <section className="space-y-10 h-[150vh] pt-10">
        <div className="text-sm">getVelocity(): {vel.toFixed(0)}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default GetVelocity;
