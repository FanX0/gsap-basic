import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type EaselStatic = unknown;

const EaselIndex = () => {
  const getE = () => (globalThis as { EaselPlugin?: EaselStatic }).EaselPlugin;
  const hasPlugin = Boolean(getE());

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        {!hasPlugin && <div className="text-sm text-red-600">EaselPlugin is not available.</div>}
        <div className="text-sm">EaselPlugin: {String(hasPlugin)}</div>
      </section>
    </DocumentationLayout>
  );
};

export default EaselIndex;
