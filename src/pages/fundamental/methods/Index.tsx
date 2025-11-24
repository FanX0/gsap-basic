import { Link } from "react-router";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Index = () => {
  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <p className="text-sm text-gray-600">
          Click a method to see a hands-on demo and a short explanation embedded
          at the top of each page.
        </p>
        <h1 className="text-xl font-semibold">GSAP Methods</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link to="/fundamental/methods/config">gsap.config()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/context">gsap.context()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/defaults">gsap.defaults()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/delayedCall">
              gsap.delayedCall()
            </Link>
          </li>
          <li>
            <Link to="/fundamental/methods/exportRoot">gsap.exportRoot()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/from">gsap.from()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/fromTo">gsap.fromTo()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/getById">gsap.getById()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/getProperty">
              gsap.getProperty()
            </Link>
          </li>
          <li>
            <Link to="/fundamental/methods/getTweensOf">
              gsap.getTweensOf()
            </Link>
          </li>
          <li>
            <Link to="/fundamental/methods/isTweening">gsap.isTweening()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/killTweensOf">
              gsap.killTweensOf()
            </Link>
          </li>
          <li>
            <Link to="/fundamental/methods/matchMedia">gsap.matchMedia()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/matchMediaRefresh">
              gsap.matchMediaRefresh()
            </Link>
          </li>
          <li>
            <Link to="/fundamental/methods/parseEase">gsap.parseEase()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/quickSetter">
              gsap.quickSetter()
            </Link>
          </li>
          <li>
            <Link to="/fundamental/methods/quickTo">gsap.quickTo()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/registerEase">
              gsap.registerEase()
            </Link>
          </li>
          <li>
            <Link to="/fundamental/methods/registerEffect">
              gsap.registerEffect()
            </Link>
          </li>
          <li>
            <Link to="/fundamental/methods/registerPlugin">
              gsap.registerPlugin()
            </Link>
          </li>
          <li>
            <Link to="/fundamental/methods/set">gsap.set()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/timeline">gsap.timeline()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/to">gsap.to()</Link>
          </li>
          <li>
            <Link to="/fundamental/methods/updateRoot">gsap.updateRoot()</Link>
          </li>
        </ul>
      </section>
    </DocumentationLayout>
  );
};

export default Index;
