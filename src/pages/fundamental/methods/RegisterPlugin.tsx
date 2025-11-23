import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { gsap } from "gsap";

const RegisterPlugin = () => {
  const tryRegister = () => {
    try {
      const NoopPlugin: unknown = { name: "NoopPlugin" };
      gsap.registerPlugin(NoopPlugin as never);
    } catch (error) {
      void error;
    }
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.registerPlugin</h1>
          <p className="text-sm text-gray-600">Registers GSAP plugins so their features are available globally. Example: gsap.registerPlugin(ScrollTrigger)</p>
        </header>
        <button className="px-3 py-1 border rounded" onClick={tryRegister}>registerPlugin (noop)</button>
      </section>
    </DocumentationLayout>
  );
};

export default RegisterPlugin;
