import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { Link } from "react-router";

const Index = () => {
  return (
    <DocumentationLayout>
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link to="/fundamental/easing/customBounce">CustomBounce</Link>
          </li>
          <li>
            <Link to="/fundamental/easing/customEase">CustomEase</Link>
          </li>
          <li>
            <Link to="/fundamental/easing/customWiggle">CustomWiggle</Link>
          </li>
          <li>
            <Link to="/fundamental/easing/expoScaleEase">ExpoScaleEase</Link>
          </li>
          <li>
            <Link to="/fundamental/easing/roughEase">RoughEase</Link>
          </li>
          <li>
            <Link to="/fundamental/easing/slowMo">SlowMo</Link>
          </li>
          <li>
            <Link to="/fundamental/easing/steppedEase">SteppedEase</Link>
          </li>
        </ul>
      </div>
    </DocumentationLayout>
  );
};
export default Index;
