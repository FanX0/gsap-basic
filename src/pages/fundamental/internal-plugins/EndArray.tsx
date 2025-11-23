import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const EndArray = () => {
  const arrRef = useRef<number[]>([1, 2, 3]);
  const [values, setValues] = useState<number[]>([1, 2, 3]);

  useEffect(() => {
    gsap.to(arrRef.current, {
      endArray: [5, 6, 7],
      duration: 1.2,
      onUpdate: () => setValues([...arrRef.current]),
    });
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <div className="text-sm">[{values.map((v) => v.toFixed(2)).join(", ")}]</div>
      </section>
    </DocumentationLayout>
  );
};

export default EndArray;
