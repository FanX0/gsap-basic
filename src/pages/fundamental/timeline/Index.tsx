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
            <li>
              <Link to="/fundamental/timeline/data">data</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/labels">labels</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/scrollTrigger">
                scrollTrigger
              </Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/vars">vars</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Methods</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link to="/fundamental/timeline/add">add()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/addLabel">addLabel()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/call">call()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/clear">clear()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/duration">duration()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/endTime">endTime()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/eventCallback">
                eventCallback()
              </Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/getChildren">getChildren()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/globalTime">globalTime()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/invalidate">invalidate()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/isActive">isActive()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/kill">kill()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/pause">pause()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/paused">paused()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/play">play()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/progress">progress()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/remove">remove()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/removeLabel">removeLabel()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/restart">restart()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/resume">resume()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/reverse">reverse()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/reversed">reversed()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/seek">seek()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/startTime">startTime()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/time">time()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/timeScale">timeScale()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/totalDuration">
                totalDuration()
              </Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/totalProgress">
                totalProgress()
              </Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/totalTime">totalTime()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/tweenTo">tweenTo()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/tweenFromTo">tweenFromTo()</Link>
            </li>
            <li>
              <Link to="/fundamental/timeline/yoyo">yoyo()</Link>
            </li>
          </ul>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Index;
