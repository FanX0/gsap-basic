import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const RemoveEventListener = () => {
  const handlerRef = useRef<(self: ScrollTrigger) => void | null>(null);
  const [removed, setRemoved] = useState(false);

  const add = () => {
    const handler = () => {};
    handlerRef.current = handler as unknown as (self: ScrollTrigger) => void;
    ScrollTrigger.addEventListener("refresh", handlerRef.current);
  };

  const remove = () => {
    if (handlerRef.current) ScrollTrigger.removeEventListener("refresh", handlerRef.current);
    setRemoved(true);
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="text-sm">removed: {removed ? "true" : "false"}</div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 border rounded" onClick={add}>add refresh listener</button>
          <button className="px-3 py-1 border rounded" onClick={remove}>remove</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default RemoveEventListener;
