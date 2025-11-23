import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type PixiStatic = { registerPIXI?: (PIXI: unknown) => void };
const PixiRegisterPIXI = () => {
  const getPixiPlugin = () => (globalThis as { PixiPlugin?: PixiStatic }).PixiPlugin;
  const hasPlugin = Boolean(getPixiPlugin());
  const run = () => getPixiPlugin()?.registerPIXI?.({});
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        {!hasPlugin && <div className="text-sm text-red-600">PixiPlugin is not available.</div>}
        <button className="px-3 py-1 border rounded" onClick={run}>registerPIXI({"{}"})</button>
      </section>
    </DocumentationLayout>
  );
};
export default PixiRegisterPIXI;
