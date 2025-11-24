import { Link } from "react-router";
import DocumentationLayout from "../../components/layouts/DocumentationLayout";

const FeaturesToolsIndex = () => {
  return (
    <DocumentationLayout>
      <section className="space-y-10 pt-10">
        <h1 className="text-xl font-semibold">All Features</h1>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Utility Methods</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <Link to="/features-tools/utility-methods/checkPrefix">
                checkPrefix
              </Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/clamp">clamp</Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/distribute">
                distribute
              </Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/getUnit">getUnit</Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/interpolate">
                interpolate
              </Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/mapRange">
                mapRange
              </Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/normalize">
                normalize
              </Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/pipe">pipe</Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/random">random</Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/selector">
                selector
              </Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/shuffle">shuffle</Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/snap">snap</Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/splitColor">
                splitColor
              </Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/toArray">toArray</Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/unitize">unitize</Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/wrap">wrap</Link>
            </li>
            <li>
              <Link to="/features-tools/utility-methods/wrapYoyo">
                wrapYoyo
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default FeaturesToolsIndex;
