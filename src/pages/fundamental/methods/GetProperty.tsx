import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const GetProperty = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [x, setX] = useState<string>("0px");

  useEffect(() => {
    if (boxRef.current) gsap.to(boxRef.current, { x: 120, duration: 1 });
    const id = setInterval(() => {
      if (boxRef.current) {
        const val = gsap.getProperty(boxRef.current, "x") as number | string;
        setX(typeof val === "number" ? `${val}px` : String(val));
      }
    }, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.getProperty</h1>
          <p className="text-sm text-gray-600">Reads the current value of a property on a target, even during animation. Example: gsap.getProperty(el, "x")</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-orange-500 rounded" />
          <div className="text-sm">x: {x}</div>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default GetProperty;
