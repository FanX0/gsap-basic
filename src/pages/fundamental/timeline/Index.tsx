import { Link } from "react-router";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Index = () => {
  return (
    <DocumentationLayout>
      <section className="space-y-6">
        <h1 className="text-xl font-semibold">GSAP Timeline</h1>
        <div>
          <h2 className="text-lg font-semibold">Properties</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link to="/gsap/timeline/data">data</Link></li>
            <li><Link to="/gsap/timeline/labels">labels</Link></li>
            <li><Link to="/gsap/timeline/scrollTrigger">scrollTrigger</Link></li>
            <li><Link to="/gsap/timeline/vars">vars</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Methods</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link to="/gsap/timeline/add">add()</Link></li>
            <li><Link to="/gsap/timeline/addLabel">addLabel()</Link></li>
            <li><Link to="/gsap/timeline/call">call()</Link></li>
            <li><Link to="/gsap/timeline/clear">clear()</Link></li>
            <li><Link to="/gsap/timeline/duration">duration()</Link></li>
            <li><Link to="/gsap/timeline/endTime">endTime()</Link></li>
            <li><Link to="/gsap/timeline/eventCallback">eventCallback()</Link></li>
            <li><Link to="/gsap/timeline/getChildren">getChildren()</Link></li>
            <li><Link to="/gsap/timeline/globalTime">globalTime()</Link></li>
            <li><Link to="/gsap/timeline/invalidate">invalidate()</Link></li>
            <li><Link to="/gsap/timeline/isActive">isActive()</Link></li>
            <li><Link to="/gsap/timeline/kill">kill()</Link></li>
            <li><Link to="/gsap/timeline/pause">pause()</Link></li>
            <li><Link to="/gsap/timeline/paused">paused()</Link></li>
            <li><Link to="/gsap/timeline/play">play()</Link></li>
            <li><Link to="/gsap/timeline/progress">progress()</Link></li>
            <li><Link to="/gsap/timeline/remove">remove()</Link></li>
            <li><Link to="/gsap/timeline/removeLabel">removeLabel()</Link></li>
            <li><Link to="/gsap/timeline/restart">restart()</Link></li>
            <li><Link to="/gsap/timeline/resume">resume()</Link></li>
            <li><Link to="/gsap/timeline/reverse">reverse()</Link></li>
            <li><Link to="/gsap/timeline/reversed">reversed()</Link></li>
            <li><Link to="/gsap/timeline/seek">seek()</Link></li>
            <li><Link to="/gsap/timeline/startTime">startTime()</Link></li>
            <li><Link to="/gsap/timeline/time">time()</Link></li>
            <li><Link to="/gsap/timeline/timeScale">timeScale()</Link></li>
            <li><Link to="/gsap/timeline/totalDuration">totalDuration()</Link></li>
            <li><Link to="/gsap/timeline/totalProgress">totalProgress()</Link></li>
            <li><Link to="/gsap/timeline/totalTime">totalTime()</Link></li>
            <li><Link to="/gsap/timeline/tweenTo">tweenTo()</Link></li>
            <li><Link to="/gsap/timeline/tweenFromTo">tweenFromTo()</Link></li>
            <li><Link to="/gsap/timeline/yoyo">yoyo()</Link></li>
          </ul>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Index;
