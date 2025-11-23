import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type PhysicsPropsStatic = unknown;
const PhysicsPropsIndex = () => {
  const getPP = () => (globalThis as { PhysicsPropsPlugin?: PhysicsPropsStatic }).PhysicsPropsPlugin;
  const hasPlugin = Boolean(getPP());
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        {!hasPlugin && <div className="text-sm text-red-600">PhysicsPropsPlugin is not available.</div>}
        <div className="text-sm">PhysicsPropsPlugin: {String(hasPlugin)}</div>
      </section>
    </DocumentationLayout>
  );
};
export default PhysicsPropsIndex;
