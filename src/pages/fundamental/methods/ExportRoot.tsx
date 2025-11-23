import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const ExportRoot = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { x: 150, duration: 1, yoyo: true, repeat: -1 });
      tlRef.current = gsap.exportRoot();
    }
  }, []);

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.exportRoot</h1>
          <p className="text-sm text-gray-600">Exports the root timeline (including child timelines) so you can control them collectively. Example: const tl = gsap.exportRoot(); tl.pause()</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-purple-500 rounded" />
          <div className="text-sm">exportRoot()</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded" onClick={() => tlRef.current?.pause()}>pause</button>
          <button className="px-3 py-1 border rounded" onClick={() => tlRef.current?.play()}>play</button>
          <button className="px-3 py-1 border rounded" onClick={() => tlRef.current?.reverse()}>reverse</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default ExportRoot;
