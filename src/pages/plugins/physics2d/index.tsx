import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type Physics2DStatic = unknown;
const Physics2DIndex = () => {
  const getP2D = () => (globalThis as { Physics2DPlugin?: Physics2DStatic }).Physics2DPlugin;
  const hasPlugin = Boolean(getP2D());
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        {!hasPlugin && <div className="text-sm text-red-600">Physics2DPlugin is not available.</div>}
        <div className="text-sm">Physics2DPlugin: {String(hasPlugin)}</div>
      </section>
    </DocumentationLayout>
  );
};
export default Physics2DIndex;
