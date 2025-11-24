import { Link } from "react-router";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Index = () => {
  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <h1 className="text-xl font-semibold">GSAP Internal Plugins</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link to="/fundamental/internal-plugins/attributes">
              Attributes
            </Link>
          </li>
          <li>
            <Link to="/fundamental/internal-plugins/endarray">EndArray</Link>
          </li>
          <li>
            <Link to="/fundamental/internal-plugins/modifiers">Modifiers</Link>
          </li>
          <li>
            <Link to="/fundamental/internal-plugins/snap">Snap</Link>
          </li>
        </ul>
      </section>
    </DocumentationLayout>
  );
};

export default Index;
