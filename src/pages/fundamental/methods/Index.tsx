import { Link } from "react-router";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Index = () => {
  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <p className="text-sm text-gray-600">Click a method to see a hands-on demo and a short explanation embedded at the top of each page.</p>
        <h1 className="text-xl font-semibold">GSAP Methods</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link to="/gsap/methods/config">gsap.config()</Link></li>
          <li><Link to="/gsap/methods/context">gsap.context()</Link></li>
          <li><Link to="/gsap/methods/defaults">gsap.defaults()</Link></li>
          <li><Link to="/gsap/methods/delayedCall">gsap.delayedCall()</Link></li>
          <li><Link to="/gsap/methods/exportRoot">gsap.exportRoot()</Link></li>
          <li><Link to="/gsap/methods/from">gsap.from()</Link></li>
          <li><Link to="/gsap/methods/fromTo">gsap.fromTo()</Link></li>
          <li><Link to="/gsap/methods/getById">gsap.getById()</Link></li>
          <li><Link to="/gsap/methods/getProperty">gsap.getProperty()</Link></li>
          <li><Link to="/gsap/methods/getTweensOf">gsap.getTweensOf()</Link></li>
          <li><Link to="/gsap/methods/isTweening">gsap.isTweening()</Link></li>
          <li><Link to="/gsap/methods/killTweensOf">gsap.killTweensOf()</Link></li>
          <li><Link to="/gsap/methods/matchMedia">gsap.matchMedia()</Link></li>
          <li><Link to="/gsap/methods/matchMediaRefresh">gsap.matchMediaRefresh()</Link></li>
          <li><Link to="/gsap/methods/parseEase">gsap.parseEase()</Link></li>
          <li><Link to="/gsap/methods/quickSetter">gsap.quickSetter()</Link></li>
          <li><Link to="/gsap/methods/quickTo">gsap.quickTo()</Link></li>
          <li><Link to="/gsap/methods/registerEase">gsap.registerEase()</Link></li>
          <li><Link to="/gsap/methods/registerEffect">gsap.registerEffect()</Link></li>
          <li><Link to="/gsap/methods/registerPlugin">gsap.registerPlugin()</Link></li>
          <li><Link to="/gsap/methods/set">gsap.set()</Link></li>
          <li><Link to="/gsap/methods/timeline">gsap.timeline()</Link></li>
          <li><Link to="/gsap/methods/to">gsap.to()</Link></li>
          <li><Link to="/gsap/methods/updateRoot">gsap.updateRoot()</Link></li>
        </ul>
      </section>
    </DocumentationLayout>
  );
};

export default Index;
