import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

type GSDevToolsStatic = { create?: (vars?: unknown) => void };

const GSDevToolsCreate = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const getD = () => (globalThis as { GSDevTools?: GSDevToolsStatic }).GSDevTools;
  const hasPlugin = Boolean(getD());

  useEffect(() => {
    const Dev = getD();
    if (!Dev || !boxRef.current) return;
    gsap.registerPlugin(Dev);
    const tl = gsap.timeline();
    tl.to(boxRef.current, { x: 150, duration: 0.6 }).to(boxRef.current, { y: 60, duration: 0.6 });
    Dev.create?.({ animation: tl });
    return () => { tl.kill(); };
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-6 pt-10">
        <div ref={boxRef} className="size-10 bg-indigo-600" />
        {!hasPlugin && <div className="text-sm text-red-600">GSDevTools is not available.</div>}
        <div className="text-sm">create(): mounted</div>
      </section>
    </DocumentationLayout>
  );
};

export default GSDevToolsCreate;
