import { Link } from "react-router";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Index = () => {
  return (
    <DocumentationLayout>
      <div>
        <ul>
          <li>
            <Link to="/plugins/scrolltrigger">ScrollTrigger</Link>
          </li>
          <li>
            <Link to="/plugins/text">TextPlugin</Link>
          </li>
          <li>
            <Link to="/plugins/draggable">Draggable</Link>
          </li>
          <li>
            <Link to="/plugins/drawsvg">DrawSVGPlugin</Link>
          </li>
        </ul>
      </div>
    </DocumentationLayout>
  );
};

export default Index;
