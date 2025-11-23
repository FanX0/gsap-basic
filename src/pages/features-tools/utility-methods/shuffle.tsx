import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const UtilsShuffle = () => {
  const [items] = useState<string[]>(["A", "B", "C", "D", "E"]);
  const [out, setOut] = useState<string[]>(items);
  const run = () => {
    const res = gsap.utils.shuffle(items.slice()) as string[];
    setOut(res);
  };
  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.utils.shuffle</h1>
          <p className="text-sm text-gray-600">Randomly shuffles array elements. Example: gsap.utils.shuffle(myArray)</p>
        </header>
        <div className="text-sm">{out.join(", ")}</div>
        <button className="px-3 py-1 border rounded" onClick={run}>shuffle</button>
      </section>
    </DocumentationLayout>
  );
};

export default UtilsShuffle;
