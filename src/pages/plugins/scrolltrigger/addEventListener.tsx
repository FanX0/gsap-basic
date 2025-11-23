import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const AddEventListener = () => {
  const [msg, setMsg] = useState("none");
  const add = () => ScrollTrigger.addEventListener("refresh", () => setMsg("refreshed"));

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div className="flex items-center gap-3">
          <div className="text-sm">message: {msg}</div>
          <button className="px-3 py-1 border rounded" onClick={add}>add refresh listener</button>
          <button className="px-3 py-1 border rounded" onClick={() => ScrollTrigger.refresh()}>trigger refresh</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default AddEventListener;
