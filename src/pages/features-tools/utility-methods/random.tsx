import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsRandom = () => {
  const [out, setOut] = useState<string>("");
  const run = () => {
    const v = gsap.utils.random(0, 100) as number;
    setOut(v.toFixed(2));
  };
  const runInt = () => {
    const v = gsap.utils.random(0, 100) as number;
    setOut(String(Math.round(v)));
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.random</h1>
          <p className="text-sm text-gray-600">Generates a random number between min and max. Can be used directly or to create a function. Example: gsap.utils.random(0, 100)</p>
        </header>
        <div className="text-sm">{out}</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={run}>random</button>
          <button className="px-3 py-1 border rounded" onClick={runInt}>random integer</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsRandom;
