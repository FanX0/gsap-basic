import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Seek = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (boxRef.current) tweenRef.current = gsap.to(boxRef.current, { x: 200, duration: 2, paused: true });
  }, []);

  const seek = (t: number) => tweenRef.current?.seek(t).pause();

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-sky-800 rounded" />
          <button className="px-3 py-1 border rounded" onClick={() => seek(0)}>seek(0)</button>
          <button className="px-3 py-1 border rounded" onClick={() => seek(1)}>seek(1)</button>
          <button className="px-3 py-1 border rounded" onClick={() => seek(2)}>seek(2)</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Seek;
