import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const KillAll = () => {
  const killAll = () => ScrollTrigger.killAll();
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <button className="px-3 py-1 border rounded" onClick={killAll}>killAll()</button>
      </section>
    </DocumentationLayout>
  );
};

export default KillAll;
