import { Link } from "react-router";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const Index = () => {
  return (
    <DocumentationLayout>
      <section className="space-y-6">
        <h1 className="text-xl font-semibold">GSAP Tween</h1>
        <div>
          <h2 className="text-lg font-semibold">Properties</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link to="/gsap/tween/data">data</Link></li>
            <li><Link to="/gsap/tween/ratio">ratio</Link></li>
            <li><Link to="/gsap/tween/scrollTrigger">scrollTrigger</Link></li>
            <li><Link to="/gsap/tween/vars">vars</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Methods</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link to="/gsap/tween/delay">delay()</Link></li>
            <li><Link to="/gsap/tween/duration">duration()</Link></li>
            <li><Link to="/gsap/tween/endTime">endTime()</Link></li>
            <li><Link to="/gsap/tween/eventCallback">eventCallback()</Link></li>
            <li><Link to="/gsap/tween/globalTime">globalTime()</Link></li>
            <li><Link to="/gsap/tween/invalidate">invalidate()</Link></li>
            <li><Link to="/gsap/tween/isActive">isActive()</Link></li>
            <li><Link to="/gsap/tween/iteration">iteration()</Link></li>
            <li><Link to="/gsap/tween/kill">kill()</Link></li>
            <li><Link to="/gsap/tween/pause">pause()</Link></li>
            <li><Link to="/gsap/tween/paused">paused()</Link></li>
            <li><Link to="/gsap/tween/play">play()</Link></li>
            <li><Link to="/gsap/tween/progress">progress()</Link></li>
            <li><Link to="/gsap/tween/repeat">repeat()</Link></li>
            <li><Link to="/gsap/tween/repeatDelay">repeatDelay()</Link></li>
            <li><Link to="/gsap/tween/restart">restart()</Link></li>
            <li><Link to="/gsap/tween/resume">resume()</Link></li>
            <li><Link to="/gsap/tween/reverse">reverse()</Link></li>
            <li><Link to="/gsap/tween/reversed">reversed()</Link></li>
            <li><Link to="/gsap/tween/revert">revert()</Link></li>
            <li><Link to="/gsap/tween/seek">seek()</Link></li>
            <li><Link to="/gsap/tween/startTime">startTime()</Link></li>
            <li><Link to="/gsap/tween/targets">targets()</Link></li>
            <li><Link to="/gsap/tween/then">then()</Link></li>
            <li><Link to="/gsap/tween/time">time()</Link></li>
            <li><Link to="/gsap/tween/timeScale">timeScale()</Link></li>
            <li><Link to="/gsap/tween/totalDuration">totalDuration()</Link></li>
            <li><Link to="/gsap/tween/totalProgress">totalProgress()</Link></li>
            <li><Link to="/gsap/tween/totalTime">totalTime()</Link></li>
            <li><Link to="/gsap/tween/yoyo">yoyo()</Link></li>
            <li><Link to="/gsap/tween/pause">pause()</Link></li>
            <li><Link to="/gsap/tween/paused">paused()</Link></li>
            <li><Link to="/gsap/tween/play">play()</Link></li>
            <li><Link to="/gsap/tween/progress">progress()</Link></li>
            <li><Link to="/gsap/tween/repeat">repeat()</Link></li>
            <li><Link to="/gsap/tween/repeatDelay">repeatDelay()</Link></li>
            <li><Link to="/gsap/tween/restart">restart()</Link></li>
            <li><Link to="/gsap/tween/resume">resume()</Link></li>
            <li><Link to="/gsap/tween/reverse">reverse()</Link></li>
            <li><Link to="/gsap/tween/reversed">reversed()</Link></li>
            <li><Link to="/gsap/tween/revert">revert()</Link></li>
            <li><Link to="/gsap/tween/seek">seek()</Link></li>
            <li><Link to="/gsap/tween/startTime">startTime()</Link></li>
            <li><Link to="/gsap/tween/targets">targets()</Link></li>
            <li><Link to="/gsap/tween/then">then()</Link></li>
            <li><Link to="/gsap/tween/time">time()</Link></li>
            <li><Link to="/gsap/tween/timeScale">timeScale()</Link></li>
            <li><Link to="/gsap/tween/totalDuration">totalDuration()</Link></li>
            <li><Link to="/gsap/tween/totalProgress">totalProgress()</Link></li>
            <li><Link to="/gsap/tween/totalTime">totalTime()</Link></li>
            <li><Link to="/gsap/tween/yoyo">yoyo()</Link></li>
          </ul>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Index;
