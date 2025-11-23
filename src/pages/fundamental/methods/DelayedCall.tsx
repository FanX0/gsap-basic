import { useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const DelayedCall = () => {
  const [message, setMessage] = useState("ready");

  const schedule = () => {
    setMessage("waiting...");
    gsap.delayedCall(1, () => setMessage("done"));
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.delayedCall</h1>
          <p className="text-sm text-gray-600">Schedules a callback to run after a delay. Example: gsap.delayedCall(1, callback)</p>
        </header>
        <div className="text-sm">status: {message}</div>
        <button className="px-3 py-1 border rounded" onClick={schedule}>delayedCall 1s</button>
      </section>
    </DocumentationLayout>
  );
};

export default DelayedCall;
