import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const SaveStyles = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (boxRef.current) boxRef.current.style.transform = "translateX(50px)";
  }, []);

  const save = () => {
    if (boxRef.current) ScrollTrigger.saveStyles(boxRef.current);
    setDone(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-gray-700 rounded" />
        <div className="text-sm">saved: {done ? "true" : "false"}</div>
        <button className="px-3 py-1 border rounded" onClick={save}>saveStyles()</button>
      </section>
    </DocumentationLayout>
  );
};

export default SaveStyles;
