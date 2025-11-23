import { useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type ScrollToStatic = { config?: (vars: unknown) => void };

const ScrollToConfig = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const getSTo = () => (globalThis as { ScrollToPlugin?: ScrollToStatic }).ScrollToPlugin;
  const hasPlugin = Boolean(getSTo());

  const setConfig = () => getSTo()?.config?.({ autoKill: true });
  const scrollToTarget = () => {
    const ST = getSTo();
    const wrapper = wrapperRef.current;
    const target = targetRef.current;
    if (!ST || !wrapper || !target) return;
    gsap.registerPlugin(ST);
    gsap.to(wrapper, { duration: 0.8, scrollTo: target });
  };

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={wrapperRef} className="relative h-40 overflow-auto border rounded">
          <div className="min-h-80 p-4 space-y-4">
            <div className="size-10 bg-indigo-600" />
            <div className="size-10 bg-pink-600" />
            <div ref={targetRef} className="size-10 bg-emerald-600" />
          </div>
        </div>
        {!hasPlugin && <div className="text-sm text-red-600">ScrollToPlugin is not available.</div>}
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={setConfig}>config({"{ autoKill: true }"})</button>
          <button className="px-3 py-1 border rounded" onClick={scrollToTarget}>scrollTo target</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default ScrollToConfig;
