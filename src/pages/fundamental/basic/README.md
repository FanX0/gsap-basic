# GSAP Basic (Tweens & Timelines)

Use this quick reference to start with GSAP in React.

## Install

```bash
npm install gsap
```

```js
import { gsap } from "gsap";
```

## Tween (minimal usage)

```js
// rotate and move elements with class .box
gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
```

- Targets: selector strings (e.g., `.box`, `#id`), DOM nodes, arrays
- Common properties: `x`, `y`, `rotation`, `opacity`, `scale`, `transformOrigin`
- Methods: `gsap.to()`, `gsap.from()`, `gsap.fromTo()`

## Timeline (sequencing)

```js
const tl = gsap.timeline();

tl
  .to("#green", { duration: 1, x: 786 })
  .to("#blue", { duration: 2, x: 786 })
  .to("#orange", { duration: 1, x: 786 });
```

- Create with `gsap.timeline()`
- Chain `.to()`, `.from()`, `.fromTo()` for ordered sequences
- Control playhead: `tl.play()`, `tl.pause()`, `tl.reverse()`, `tl.progress(0.5)`, `tl.timeScale(2)`
- Positioning: third argument accepts time or offsets `"+=1"`, `"-=0.5"`
- Labels: `tl.add("spin", "+=1"); tl.to("#blue", { rotation: 360 }, "spin");`

## React: refs + effects

```tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BasicGsap() {
  const greenRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(greenRef.current, { duration: 1, x: 200 })
      .to(blueRef.current, { duration: 2, x: 200 })
      .to(orangeRef.current, { duration: 1, x: 200 });
  }, []);

  return (
    <div style={{ display: "flex", gap: 12 }}>
      <div ref={greenRef} id="green" style={{ width: 60, height: 60, background: "#22c55e" }} />
      <div ref={blueRef} id="blue" style={{ width: 60, height: 60, background: "#3b82f6" }} />
      <div ref={orangeRef} id="orange" style={{ width: 60, height: 60, background: "#f59e0b" }} />
    </div>
  );
}
```

## Tips

- Prefer transforms (`x`, `y`, `scale`, `rotation`) and `opacity` for performance
- Use `duration`, `delay`, `repeat`, `yoyo` to control behavior
- Import only `gsap` for core tweens and timelines; plugins are optional

## Docs

- GSAP object, Tweens, Timelines: https://gsap.com/docs/v3/GSAP/