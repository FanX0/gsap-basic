import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const RefreshStatic = () => {
  const refresh = () => ScrollTrigger.refresh();
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <button className="px-3 py-1 border rounded" onClick={refresh}>refresh()</button>
      </section>
    </DocumentationLayout>
  );
};

export default RefreshStatic;
