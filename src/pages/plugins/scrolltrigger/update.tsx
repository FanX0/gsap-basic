import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Update = () => {
  const update = () => ScrollTrigger.update();
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <button className="px-3 py-1 border rounded" onClick={update}>update()</button>
      </section>
    </DocumentationLayout>
  );
};

export default Update;
