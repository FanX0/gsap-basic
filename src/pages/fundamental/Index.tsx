import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { Link } from "react-router";

const Index = () => {
  return (
    <DocumentationLayout>
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link to="/fundamental/basic">
              <h1 className="text-lg font-semibold">Fundamental Basic</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link to="/fundamental/properties">
              <h2 className="text-lg font-semibold">
                Fundamental GSAP Properties
              </h2>
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link to="/fundamental/methods">
              <h2 className="text-lg font-semibold">
                Fundamental GSAP Methods
              </h2>
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link to="/fundamental/tween">
              <h2 className="text-lg font-semibold">fundamental Tween</h2>
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link to="/fundamental/timeline">
              <h2 className="text-lg font-semibold">fundamental Timeline</h2>
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link to="/fundamental/easing">
              <h2 className="text-lg font-semibold">fundamental Easing</h2>
            </Link>
          </li>
        </ul>
      </div>
    </DocumentationLayout>
  );
};
export default Index;
