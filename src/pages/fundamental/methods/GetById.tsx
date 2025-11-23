import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";

const GetById = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { id: "moveX", x: 150, duration: 2 });
    }
  }, []);

  const toggle = () => {
    const tween = gsap.getById("moveX") as gsap.core.Tween | null;
    if (!tween) return;
    setActive(!active);
    if (active) tween.pause(); else tween.play();
  };

  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-lg font-semibold">gsap.getById</h1>
          <p className="text-sm text-gray-600">Retrieves a tween/timeline by its id so you can control it. Example: const t = gsap.getById("moveX"); t.pause()</p>
        </header>
        <div className="flex items-center gap-3">
          <div ref={boxRef} className="size-10 bg-slate-700 rounded" />
          <button className="px-3 py-1 border rounded" onClick={toggle}>{active ? "pause" : "play"}</button>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default GetById;
