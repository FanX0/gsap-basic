import { Link } from "react-router";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Index = () => {
  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <p className="text-sm text-gray-600">Explore GSAP core properties and helpers. Each page includes an explanation header and a small demo.</p>
        <h1 className="text-xl font-semibold">GSAP Core Properties</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link to="/gsap/properties/effects">gsap.effects</Link>
          </li>
          <li>
            <Link to="/gsap/properties/globalTimeline">
              gsap.globalTimeline
            </Link>
          </li>
          <li>
            <Link to="/gsap/properties/ticker">gsap.ticker</Link>
          </li>
          <li>
            <Link to="/gsap/properties/utils">gsap.utils</Link>
          </li>
          <li>
            <Link to="/gsap/properties/version">gsap.version</Link>
          </li>
        </ul>
      </section>
    </DocumentationLayout>
  );
};

export default Index;
