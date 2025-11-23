import { useEffect } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const MatchMediaRefresh = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {});
    mm.add("(max-width: 799px)", () => {});
    return () => mm.revert();
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.matchMediaRefresh</h1>
          <p className="text-sm text-gray-600">Re-evaluates matchMedia conditions and updates related animations. Use when layout changes might affect responsive animations.</p>
        </header>
        <button className="px-3 py-1 border rounded" onClick={() => gsap.matchMediaRefresh()}>matchMediaRefresh()</button>
      </section>
    </DocumentationLayout>
  );
};

export default MatchMediaRefresh;
