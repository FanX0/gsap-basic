import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const ClearScrollMemory = () => {
  const clear = () => ScrollTrigger.clearScrollMemory();
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <button className="px-3 py-1 border rounded" onClick={clear}>clearScrollMemory()</button>
      </section>
    </DocumentationLayout>
  );
};

export default ClearScrollMemory;
