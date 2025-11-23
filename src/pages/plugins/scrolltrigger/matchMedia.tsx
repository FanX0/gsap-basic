import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const MatchMedia = () => {
  const run = () => {
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": () => {},
      "(max-width: 799px)": () => {},
    });
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <button className="px-3 py-1 border rounded" onClick={run}>matchMedia()</button>
      </section>
    </DocumentationLayout>
  );
};

export default MatchMedia;
