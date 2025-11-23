import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UpdateRoot = () => {
  const step = () => {
    gsap.updateRoot(gsap.globalTimeline.time());
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.updateRoot</h1>
          <p className="text-sm text-gray-600">Manually updates GSAP’s root timeline to a specific time. Advanced use for custom tick management.</p>
        </header>
        <button className="px-3 py-1 border rounded" onClick={step}>updateRoot()</button>
      </section>
    </DocumentationLayout>
  );
};

export default UpdateRoot;
