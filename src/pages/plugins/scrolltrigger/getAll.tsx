import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const GetAll = () => {
  const [count, setCount] = useState(0);
  const read = () => setCount(ScrollTrigger.getAll().length);
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="text-sm">getAll(): {count}</div>
        <button className="px-3 py-1 border rounded" onClick={read}>read</button>
      </section>
    </DocumentationLayout>
  );
};

export default GetAll;
