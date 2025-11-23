import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type PixiStatic = { registerPIXI?: (PIXI: unknown) => void };
const PixiIndex = () => {
  const getPixiPlugin = () => (globalThis as { PixiPlugin?: PixiStatic }).PixiPlugin;
  const hasPlugin = Boolean(getPixiPlugin());
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        {!hasPlugin && <div className="text-sm text-red-600">PixiPlugin is not available.</div>}
        <div className="text-sm">PixiPlugin: {String(hasPlugin)}</div>
      </section>
    </DocumentationLayout>
  );
};
export default PixiIndex;
