import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const ClearMatchMedia = () => {
  const clearAll = () => ScrollTrigger.clearMatchMedia();
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <button className="px-3 py-1 border rounded" onClick={clearAll}>clearMatchMedia()</button>
      </section>
    </DocumentationLayout>
  );
};

export default ClearMatchMedia;
