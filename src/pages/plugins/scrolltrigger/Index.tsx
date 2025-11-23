import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import { Link } from "react-router";

const Index = () => {
  return (
    <DocumentationLayout>
      <div>
        <ul>
          <li>
            <Link to="/plugins/scrolltrigger/animation">
              ScrollTrigger Animation
            </Link>
          </li>
        </ul>
      </div>
    </DocumentationLayout>
  );
};

export default Index;
