import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Version = () => {
  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.version</h1>
          <p className="text-sm text-gray-600">Current GSAP version string. Useful for debugging and verifying the installed version.</p>
        </header>
        <div className="text-sm">gsap.version: {gsap.version}</div>
      </section>
    </DocumentationLayout>
  );
};

export default Version;
