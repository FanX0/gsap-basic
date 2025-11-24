import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { Flip } from "gsap/Flip";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";
import { Observer } from "gsap/Observer";
import { EaselPlugin } from "gsap/EaselPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { VelocityTracker } from "gsap/utils/VelocityTracker";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  PixiPlugin,
  Flip,
  Observer,
  EaselPlugin,
  SplitText,
  ScrollSmoother,
  DrawSVGPlugin,
  MorphSVGPlugin,
  GSDevTools,
  InertiaPlugin,
  MotionPathHelper,
  Physics2DPlugin,
  PhysicsPropsPlugin,
  ScrambleTextPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase,
  CustomBounce,
  CustomWiggle
);
const G = globalThis as unknown as {
  [key: string]: unknown;
};
G.ScrollTrigger = ScrollTrigger;
G.ScrollToPlugin = ScrollToPlugin;
G.Draggable = Draggable;
G.MotionPathPlugin = MotionPathPlugin;
G.PixiPlugin = PixiPlugin;
G.Flip = Flip;
G.Observer = Observer;
G.EaselPlugin = EaselPlugin;
G.SplitText = SplitText;
G.ScrollSmoother = ScrollSmoother;
G.DrawSVGPlugin = DrawSVGPlugin;
G.MorphSVGPlugin = MorphSVGPlugin;
G.GSDevTools = GSDevTools;
G.InertiaPlugin = InertiaPlugin;
G.MotionPathHelper = MotionPathHelper;
G.Physics2DPlugin = Physics2DPlugin;
G.PhysicsPropsPlugin = PhysicsPropsPlugin;
G.ScrambleTextPlugin = ScrambleTextPlugin;
G.TextPlugin = TextPlugin;
G.VelocityTracker = VelocityTracker;

G.RoughEase = RoughEase;
G.ExpoScaleEase = ExpoScaleEase;
G.SlowMo = SlowMo;
G.CustomEase = CustomEase;
G.CustomBounce = CustomBounce;
G.CustomWiggle = CustomWiggle;
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";

import EasingIndex from "./pages/fundamental/easing/Index";
import Documentation from "./pages/Documentation";
import FeaturesToolsIndex from "./pages/features-tools/Index";
import Basic from "./pages/fundamental/basic/Basic";
import To from "./pages/fundamental/basic/To";
import From from "./pages/fundamental/basic/From";
import FromTo from "./pages/fundamental/basic/FromTo";
import Timeline from "./pages/fundamental/basic/Timeline";
import PropertiesIndex from "./pages/fundamental/properties/Index";
import Effects from "./pages/fundamental/properties/Effects";
import GlobalTimeline from "./pages/fundamental/properties/GlobalTimeline";
import Ticker from "./pages/fundamental/properties/Ticker";
import Utils from "./pages/fundamental/properties/Utils";
import Version from "./pages/fundamental/properties/Version";
import MethodsIndex from "./pages/fundamental/methods/Index";
import MethodConfig from "./pages/fundamental/methods/Config";
import MethodContext from "./pages/fundamental/methods/Context";
import MethodDefaults from "./pages/fundamental/methods/Defaults";
import MethodDelayedCall from "./pages/fundamental/methods/DelayedCall";
import MethodExportRoot from "./pages/fundamental/methods/ExportRoot";
import MethodFrom from "./pages/fundamental/methods/From";
import MethodFromTo from "./pages/fundamental/methods/FromTo";
import MethodGetById from "./pages/fundamental/methods/GetById";
import MethodGetProperty from "./pages/fundamental/methods/GetProperty";
import MethodGetTweensOf from "./pages/fundamental/methods/GetTweensOf";
import MethodIsTweening from "./pages/fundamental/methods/IsTweening";
import MethodKillTweensOf from "./pages/fundamental/methods/KillTweensOf";
import MethodMatchMedia from "./pages/fundamental/methods/MatchMedia";
import MethodMatchMediaRefresh from "./pages/fundamental/methods/MatchMediaRefresh";
import MethodParseEase from "./pages/fundamental/methods/ParseEase";
import MethodQuickSetter from "./pages/fundamental/methods/QuickSetter";
import MethodQuickTo from "./pages/fundamental/methods/QuickTo";
import MethodRegisterEase from "./pages/fundamental/methods/RegisterEase";
import MethodRegisterEffect from "./pages/fundamental/methods/RegisterEffect";
import MethodRegisterPlugin from "./pages/fundamental/methods/RegisterPlugin";
import MethodSet from "./pages/fundamental/methods/Set";
import MethodTimeline from "./pages/fundamental/methods/Timeline";
import MethodTo from "./pages/fundamental/methods/To";
import MethodUpdateRoot from "./pages/fundamental/methods/UpdateRoot";
import TweenIndex from "./pages/fundamental/tween/Index";
import TweenData from "./pages/fundamental/tween/Data";
import TweenRatio from "./pages/fundamental/tween/Ratio";
import TweenScrollTrigger from "./pages/fundamental/tween/ScrollTrigger";
import TweenVars from "./pages/fundamental/tween/Vars";
import TweenDelay from "./pages/fundamental/tween/Delay";
import TweenDuration from "./pages/fundamental/tween/Duration";
import TweenEndTime from "./pages/fundamental/tween/EndTime";
import TweenEventCallback from "./pages/fundamental/tween/EventCallback";
import TweenGlobalTime from "./pages/fundamental/tween/GlobalTime";
import TweenInvalidate from "./pages/fundamental/tween/Invalidate";
import TweenIsActive from "./pages/fundamental/tween/IsActive";
import TweenIteration from "./pages/fundamental/tween/Iteration";
import TweenKill from "./pages/fundamental/tween/Kill";
import TweenPause from "./pages/fundamental/tween/Pause";
import TweenPaused from "./pages/fundamental/tween/Paused";
import TweenPlay from "./pages/fundamental/tween/Play";
import TweenProgress from "./pages/fundamental/tween/Progress";
import TweenRepeat from "./pages/fundamental/tween/Repeat";
import TweenRepeatDelay from "./pages/fundamental/tween/RepeatDelay";
import TweenRestart from "./pages/fundamental/tween/Restart";
import TweenResume from "./pages/fundamental/tween/Resume";
import TweenReverse from "./pages/fundamental/tween/Reverse";
import TweenReversed from "./pages/fundamental/tween/Reversed";
import TweenRevert from "./pages/fundamental/tween/Revert";
import TweenSeek from "./pages/fundamental/tween/Seek";
import TweenStartTime from "./pages/fundamental/tween/StartTime";
import TweenTargets from "./pages/fundamental/tween/Targets";
import TweenThen from "./pages/fundamental/tween/Then";
import TweenTime from "./pages/fundamental/tween/Time";
import TweenTimeScale from "./pages/fundamental/tween/TimeScale";
import TweenTotalDuration from "./pages/fundamental/tween/TotalDuration";
import TweenTotalProgress from "./pages/fundamental/tween/TotalProgress";
import TweenTotalTime from "./pages/fundamental/tween/TotalTime";
import TweenYoyo from "./pages/fundamental/tween/Yoyo";
import EasingCustomBounce from "./pages/fundamental/easing/CustomBounce";
import EasingCustomEase from "./pages/fundamental/easing/CustomEase";
import EasingCustomWiggle from "./pages/fundamental/easing/CustomWiggle";
import EasingExpoScaleEase from "./pages/fundamental/easing/ExpoScaleEase";
import EasingRoughEase from "./pages/fundamental/easing/RoughEase";
import EasingSlowMo from "./pages/fundamental/easing/SlowMo";
import EasingSteppedEase from "./pages/fundamental/easing/SteppedEase";
import TimelineIndex from "./pages/fundamental/timeline/Index";
import TimelineData from "./pages/fundamental/timeline/Data";
import TimelineLabels from "./pages/fundamental/timeline/Labels";
import TimelineScrollTrigger from "./pages/fundamental/timeline/ScrollTrigger";
import TimelineVars from "./pages/fundamental/timeline/Vars";
import TimelineAdd from "./pages/fundamental/timeline/Add";
import TimelineAddLabel from "./pages/fundamental/timeline/AddLabel";
import TimelineCall from "./pages/fundamental/timeline/Call";
import TimelineClear from "./pages/fundamental/timeline/Clear";
import TimelineDuration from "./pages/fundamental/timeline/Duration";
import TimelineEndTime from "./pages/fundamental/timeline/EndTime";
import TimelineEventCallback from "./pages/fundamental/timeline/EventCallback";
import TimelineGetChildren from "./pages/fundamental/timeline/GetChildren";
import TimelineGlobalTime from "./pages/fundamental/timeline/GlobalTime";
import TimelineInvalidate from "./pages/fundamental/timeline/Invalidate";
import TimelineIsActive from "./pages/fundamental/timeline/IsActive";
import TimelineKill from "./pages/fundamental/timeline/Kill";
import TimelinePause from "./pages/fundamental/timeline/Pause";
import TimelinePaused from "./pages/fundamental/timeline/Paused";
import TimelinePlay from "./pages/fundamental/timeline/Play";
import TimelineProgress from "./pages/fundamental/timeline/Progress";
import TimelineRemove from "./pages/fundamental/timeline/Remove";
import TimelineRemoveLabel from "./pages/fundamental/timeline/RemoveLabel";
import TimelineRestart from "./pages/fundamental/timeline/Restart";
import TimelineResume from "./pages/fundamental/timeline/Resume";
import TimelineReverse from "./pages/fundamental/timeline/Reverse";
import TimelineReversed from "./pages/fundamental/timeline/Reversed";
import TimelineSeek from "./pages/fundamental/timeline/Seek";
import TimelineStartTime from "./pages/fundamental/timeline/StartTime";
import TimelineTime from "./pages/fundamental/timeline/Time";
import TimelineTimeScale from "./pages/fundamental/timeline/TimeScale";
import TimelineTotalDuration from "./pages/fundamental/timeline/TotalDuration";
import TimelineTotalProgress from "./pages/fundamental/timeline/TotalProgress";
import TimelineTotalTime from "./pages/fundamental/timeline/TotalTime";
import TimelineTweenTo from "./pages/fundamental/timeline/TweenTo";
import TimelineTweenFromTo from "./pages/fundamental/timeline/TweenFromTo";
import TimelineYoyo from "./pages/fundamental/timeline/Yoyo";
import STAnimation from "./pages/plugins/scrolltrigger/animation";
import STDirection from "./pages/plugins/scrolltrigger/direction";
import STStart from "./pages/plugins/scrolltrigger/start";
import STEnd from "./pages/plugins/scrolltrigger/end";
import STIsActive from "./pages/plugins/scrolltrigger/isActive";
import STIsTouch from "./pages/plugins/scrolltrigger/isTouch";
import STPin from "./pages/plugins/scrolltrigger/pin";
import STProgress from "./pages/plugins/scrolltrigger/progress";
import STScroller from "./pages/plugins/scrolltrigger/scroller";
import STTrigger from "./pages/plugins/scrolltrigger/trigger";
import STVars from "./pages/plugins/scrolltrigger/vars";
import STDisable from "./pages/plugins/scrolltrigger/disable";
import STEnable from "./pages/plugins/scrolltrigger/enable";
import STGetTween from "./pages/plugins/scrolltrigger/getTween";
import STGetVelocity from "./pages/plugins/scrolltrigger/getVelocity";
import STKill from "./pages/plugins/scrolltrigger/kill";
import STLabelToScroll from "./pages/plugins/scrolltrigger/labelToScroll";
import STNext from "./pages/plugins/scrolltrigger/next";
import STPrevious from "./pages/plugins/scrolltrigger/previous";
import STRefreshInstance from "./pages/plugins/scrolltrigger/refresh-instance";
import STScroll from "./pages/plugins/scrolltrigger/scroll";
import STAddEventListener from "./pages/plugins/scrolltrigger/addEventListener";
import STBatch from "./pages/plugins/scrolltrigger/batch";
import STClearMatchMedia from "./pages/plugins/scrolltrigger/clearMatchMedia";
import STClearScrollMemory from "./pages/plugins/scrolltrigger/clearScrollMemory";
import STConfig from "./pages/plugins/scrolltrigger/config";
import STCreate from "./pages/plugins/scrolltrigger/create";
import STDefaults from "./pages/plugins/scrolltrigger/defaults";
import STGetAll from "./pages/plugins/scrolltrigger/getAll";
import STGetById from "./pages/plugins/scrolltrigger/getById";
import STIsInViewport from "./pages/plugins/scrolltrigger/isInViewport";
import STIsScrolling from "./pages/plugins/scrolltrigger/isScrolling";
import STKillAll from "./pages/plugins/scrolltrigger/killAll";
import STMatchMedia from "./pages/plugins/scrolltrigger/matchMedia";
import STMaxScroll from "./pages/plugins/scrolltrigger/maxScroll";
import STNormalizeScroll from "./pages/plugins/scrolltrigger/normalizeScroll";
import STObserve from "./pages/plugins/scrolltrigger/observe";
import STPositionInViewport from "./pages/plugins/scrolltrigger/positionInViewport";
import STRefreshStatic from "./pages/plugins/scrolltrigger/refresh-static";
import STRemoveEventListener from "./pages/plugins/scrolltrigger/removeEventListener";
import STSaveStyles from "./pages/plugins/scrolltrigger/saveStyles";
import STScrollerProxy from "./pages/plugins/scrolltrigger/scrollerProxy";
import STSnapDirectional from "./pages/plugins/scrolltrigger/snapDirectional";
import STSort from "./pages/plugins/scrolltrigger/sort";
import STUpdate from "./pages/plugins/scrolltrigger/update";
import SMProgress from "./pages/plugins/scrollsmoother/progress";
import SMScrollTrigger from "./pages/plugins/scrollsmoother/scrollTrigger";
import SMVars from "./pages/plugins/scrollsmoother/vars";
import SMContent from "./pages/plugins/scrollsmoother/content";
import SMEffects from "./pages/plugins/scrollsmoother/effects";
import SMGetVelocity from "./pages/plugins/scrollsmoother/getVelocity";
import SMKill from "./pages/plugins/scrollsmoother/kill";
import SMOffset from "./pages/plugins/scrollsmoother/offset";
import SMPaused from "./pages/plugins/scrollsmoother/paused";
import SMScrollTo from "./pages/plugins/scrollsmoother/scrollTo";
import SMScrollTop from "./pages/plugins/scrollsmoother/scrollTop";
import SMSmooth from "./pages/plugins/scrollsmoother/smooth";
import SMCreate from "./pages/plugins/scrollsmoother/create";
import SMGet from "./pages/plugins/scrollsmoother/get";
import SMWrapper from "./pages/plugins/scrollsmoother/wrapper";
import STXChars from "./pages/plugins/splittext/chars";
import STXIsSplit from "./pages/plugins/splittext/isSplit";
import STXLines from "./pages/plugins/splittext/lines";
import STXMasks from "./pages/plugins/splittext/masks";
import STXVars from "./pages/plugins/splittext/vars";
import STXWords from "./pages/plugins/splittext/words";
import STXRevert from "./pages/plugins/splittext/revert";
import STXSplit from "./pages/plugins/splittext/split";
import STXCreate from "./pages/plugins/splittext/create";
import FlipBatch from "./pages/plugins/flip/batch";
import FlipFit from "./pages/plugins/flip/fit";
import FlipFrom from "./pages/plugins/flip/from";
import FlipGetState from "./pages/plugins/flip/getState";
import FlipIsFlipping from "./pages/plugins/flip/isFlipping";
import FlipKillFlipsOf from "./pages/plugins/flip/killFlipsOf";
import FlipMakeAbsolute from "./pages/plugins/flip/makeAbsolute";
import FlipTo from "./pages/plugins/flip/to";
import DGAutoScroll from "./pages/plugins/draggable/autoScroll";
import DGDeltaX from "./pages/plugins/draggable/deltaX";
import DGDeltaY from "./pages/plugins/draggable/deltaY";
import DGIsPressed from "./pages/plugins/draggable/isPressed";
import DGIsThrowing from "./pages/plugins/draggable/isThrowing";
import DGLockAxis from "./pages/plugins/draggable/lockAxis";
import DGLockedAxis from "./pages/plugins/draggable/lockedAxis";
import DGMaxRotation from "./pages/plugins/draggable/maxRotation";
import DGMaxX from "./pages/plugins/draggable/maxX";
import DGMaxY from "./pages/plugins/draggable/maxY";
import DGMinRotation from "./pages/plugins/draggable/minRotation";
import DGMinX from "./pages/plugins/draggable/minX";
import DGMinY from "./pages/plugins/draggable/minY";
import DGPointerEvent from "./pages/plugins/draggable/pointerEvent";
import DGPointerX from "./pages/plugins/draggable/pointerX";
import DGPointerY from "./pages/plugins/draggable/pointerY";
import DGRotation from "./pages/plugins/draggable/rotation";
import DGStartX from "./pages/plugins/draggable/startX";
import DGStartY from "./pages/plugins/draggable/startY";
import DGTarget from "./pages/plugins/draggable/target";
import DGTween from "./pages/plugins/draggable/tween";
import DGVars from "./pages/plugins/draggable/vars";
import DGX from "./pages/plugins/draggable/x";
import DGY from "./pages/plugins/draggable/y";
import DGZIndex from "./pages/plugins/draggable/zIndex";
import DGEndRotation from "./pages/plugins/draggable/endRotation";
import DGEndX from "./pages/plugins/draggable/endX";
import DGEndY from "./pages/plugins/draggable/endY";
import DGAddEventListener from "./pages/plugins/draggable/addEventListener";
import DGApplyBounds from "./pages/plugins/draggable/applyBounds";
import DGCreate from "./pages/plugins/draggable/create";
import DGDisable from "./pages/plugins/draggable/disable";
import DGEnable from "./pages/plugins/draggable/enable";
import DGEnabled from "./pages/plugins/draggable/enabled";
import DGEndDrag from "./pages/plugins/draggable/endDrag";
import DGGet from "./pages/plugins/draggable/get";
import DGGetDirection from "./pages/plugins/draggable/getDirection";
import DGHitTest from "./pages/plugins/draggable/hitTest";
import DGKill from "./pages/plugins/draggable/kill";
import DGStartDrag from "./pages/plugins/draggable/startDrag";
import DGTimeSinceDrag from "./pages/plugins/draggable/timeSinceDrag";
import DGUpdate from "./pages/plugins/draggable/update";
import DrawGetLength from "./pages/plugins/drawsvg/getLength";
import DrawGetPosition from "./pages/plugins/drawsvg/getPosition";
import EaselIndex from "./pages/plugins/easel/index";
import DevCreate from "./pages/plugins/gsdevtools/create";
import InertiaGetVelocity from "./pages/plugins/inertia/getVelocity";
import InertiaIsTracking from "./pages/plugins/inertia/isTracking";
import InertiaTrack from "./pages/plugins/inertia/track";
import InertiaUntrack from "./pages/plugins/inertia/untrack";
import VTTarget from "./pages/plugins/velocity-tracker/target";
import VTAddProp from "./pages/plugins/velocity-tracker/addProp";
import VTGet from "./pages/plugins/velocity-tracker/get";
import VTGetByTarget from "./pages/plugins/velocity-tracker/getByTarget";
import VTIsTracking from "./pages/plugins/velocity-tracker/isTracking";
import VTIsTrackingProp from "./pages/plugins/velocity-tracker/isTrackingProp";
import VTRemoveProp from "./pages/plugins/velocity-tracker/removeProp";
import VTTrack from "./pages/plugins/velocity-tracker/track";
import VTUntrack from "./pages/plugins/velocity-tracker/untrack";
import MorphDefaultRender from "./pages/plugins/morphsvg/defaultRender";
import MorphDefaultType from "./pages/plugins/morphsvg/defaultType";
import MorphDefaultUpdateTarget from "./pages/plugins/morphsvg/defaultUpdateTarget";
import MorphConvertToPath from "./pages/plugins/morphsvg/convertToPath";
import MorphRawPathToString from "./pages/plugins/morphsvg/rawPathToString";
import MorphStringToRawPath from "./pages/plugins/morphsvg/stringToRawPath";
import MPArrayToRawPath from "./pages/plugins/motionpath/arrayToRawPath";
import MPConvertCoordinates from "./pages/plugins/motionpath/convertCoordinates";
import MPConvertToPath from "./pages/plugins/motionpath/convertToPath";
import MPGetAlignMatrix from "./pages/plugins/motionpath/getAlignMatrix";
import MPGetGlobalMatrix from "./pages/plugins/motionpath/getGlobalMatrix";
import MPGetLength from "./pages/plugins/motionpath/getLength";
import MPGetPositionOnPath from "./pages/plugins/motionpath/getPositionOnPath";
import MPGetRawPath from "./pages/plugins/motionpath/getRawPath";
import MPGetRelativePosition from "./pages/plugins/motionpath/getRelativePosition";
import MPPointsToSegment from "./pages/plugins/motionpath/pointsToSegment";
import MPRawPathToString from "./pages/plugins/motionpath/rawPathToString";
import MPSliceRawPath from "./pages/plugins/motionpath/sliceRawPath";
import MPStringToRawPath from "./pages/plugins/motionpath/stringToRawPath";
import MPHKill from "./pages/plugins/motionpathhelper/kill";
import MPHEditPath from "./pages/plugins/motionpathhelper/editPath";
import ObserverCreate from "./pages/plugins/observer/create";
import ObserverDisable from "./pages/plugins/observer/disable";
import ObserverEnable from "./pages/plugins/observer/enable";
import ObserverKill from "./pages/plugins/observer/kill";
import ObserverIsTouch from "./pages/plugins/observer/isTouch";
import ObsDeltaX from "./pages/plugins/observer/deltaX";
import ObsDeltaY from "./pages/plugins/observer/deltaY";
import ObsEvent from "./pages/plugins/observer/event";
import ObsIsDragging from "./pages/plugins/observer/isDragging";
import ObsIsEnabled from "./pages/plugins/observer/isEnabled";
import ObsIsPressed from "./pages/plugins/observer/isPressed";
import ObsStartX from "./pages/plugins/observer/startX";
import ObsStartY from "./pages/plugins/observer/startY";
import ObsTarget from "./pages/plugins/observer/target";
import ObsVars from "./pages/plugins/observer/vars";
import ObsVelocityX from "./pages/plugins/observer/velocityX";
import ObsVelocityY from "./pages/plugins/observer/velocityY";
import ObsX from "./pages/plugins/observer/x";
import ObsY from "./pages/plugins/observer/y";
import Physics2DIndex from "./pages/plugins/physics2d/index";
import PhysicsPropsIndex from "./pages/plugins/physicsprops/index";
import PixiIndex from "./pages/plugins/pixi/index";
import PixiRegisterPIXI from "./pages/plugins/pixi/registerPIXI";
import ScrambleTextIndex from "./pages/plugins/scrambletext/index";
import UtilsCheckPrefix from "./pages/features-tools/utility-methods/checkPrefix";
import UtilsClamp from "./pages/features-tools/utility-methods/clamp";
import UtilsDistribute from "./pages/features-tools/utility-methods/distribute";
import UtilsGetUnit from "./pages/features-tools/utility-methods/getUnit";
import UtilsInterpolate from "./pages/features-tools/utility-methods/interpolate";
import UtilsMapRange from "./pages/features-tools/utility-methods/mapRange";
import UtilsNormalize from "./pages/features-tools/utility-methods/normalize";
import UtilsPipe from "./pages/features-tools/utility-methods/pipe";
import UtilsRandom from "./pages/features-tools/utility-methods/random";
import UtilsSelector from "./pages/features-tools/utility-methods/selector";
import UtilsShuffle from "./pages/features-tools/utility-methods/shuffle";
import UtilsSnap from "./pages/features-tools/utility-methods/snap";
import UtilsSplitColor from "./pages/features-tools/utility-methods/splitColor";
import UtilsToArray from "./pages/features-tools/utility-methods/toArray";
import UtilsUnitize from "./pages/features-tools/utility-methods/unitize";
import UtilsWrap from "./pages/features-tools/utility-methods/wrap";
import UtilsWrapYoyo from "./pages/features-tools/utility-methods/wrapYoyo";
import ScrollToConfig from "./pages/plugins/scrollto/config";
import TextPluginIndex from "./pages/plugins/text/index";
import PluginsIndex from "./pages/plugins/Index";
import FundamentalIndex from "./pages/fundamental/Index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundamental/easing" element={<EasingIndex />} />
        <Route path="/fundamental" element={<FundamentalIndex />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/features-tools" element={<FeaturesToolsIndex />} />
        <Route path="/fundamental/basic" element={<Basic />} />
        <Route path="/fundamental/basic/to" element={<To />} />
        <Route path="/fundamental/basic/from" element={<From />} />
        <Route path="/fundamental/basic/fromto" element={<FromTo />} />
        <Route path="/fundamental/basic/timeline" element={<Timeline />} />
        <Route path="/fundamental/properties" element={<PropertiesIndex />} />
        <Route path="/fundamental/properties/effects" element={<Effects />} />
        <Route
          path="/fundamental/properties/globalTimeline"
          element={<GlobalTimeline />}
        />
        <Route path="/fundamental/properties/ticker" element={<Ticker />} />
        <Route path="/fundamental/properties/utils" element={<Utils />} />
        <Route path="/fundamental/properties/version" element={<Version />} />
        <Route path="/fundamental/methods" element={<MethodsIndex />} />
        <Route path="/fundamental/methods/config" element={<MethodConfig />} />
        <Route
          path="/fundamental/methods/context"
          element={<MethodContext />}
        />
        <Route
          path="/fundamental/methods/defaults"
          element={<MethodDefaults />}
        />
        <Route
          path="/fundamental/methods/delayedCall"
          element={<MethodDelayedCall />}
        />
        <Route
          path="/fundamental/methods/exportRoot"
          element={<MethodExportRoot />}
        />
        <Route path="/fundamental/methods/from" element={<MethodFrom />} />
        <Route path="/fundamental/methods/fromTo" element={<MethodFromTo />} />
        <Route
          path="/fundamental/methods/getById"
          element={<MethodGetById />}
        />
        <Route
          path="/fundamental/methods/getProperty"
          element={<MethodGetProperty />}
        />
        <Route
          path="/fundamental/methods/getTweensOf"
          element={<MethodGetTweensOf />}
        />
        <Route
          path="/fundamental/methods/isTweening"
          element={<MethodIsTweening />}
        />
        <Route
          path="/fundamental/methods/killTweensOf"
          element={<MethodKillTweensOf />}
        />
        <Route
          path="/fundamental/methods/matchMedia"
          element={<MethodMatchMedia />}
        />
        <Route
          path="/fundamental/methods/matchMediaRefresh"
          element={<MethodMatchMediaRefresh />}
        />
        <Route
          path="/fundamental/methods/parseEase"
          element={<MethodParseEase />}
        />
        <Route
          path="/fundamental/methods/quickSetter"
          element={<MethodQuickSetter />}
        />
        <Route
          path="/fundamental/methods/quickTo"
          element={<MethodQuickTo />}
        />
        <Route
          path="/fundamental/methods/registerEase"
          element={<MethodRegisterEase />}
        />
        <Route
          path="/fundamental/methods/registerEffect"
          element={<MethodRegisterEffect />}
        />
        <Route
          path="/fundamental/methods/registerPlugin"
          element={<MethodRegisterPlugin />}
        />
        <Route path="/fundamental/methods/set" element={<MethodSet />} />
        <Route
          path="/fundamental/methods/timeline"
          element={<MethodTimeline />}
        />
        <Route path="/fundamental/methods/to" element={<MethodTo />} />
        <Route
          path="/fundamental/methods/updateRoot"
          element={<MethodUpdateRoot />}
        />
        <Route path="/fundamental/tween" element={<TweenIndex />} />
        <Route path="/fundamental/tween/data" element={<TweenData />} />
        <Route path="/fundamental/tween/ratio" element={<TweenRatio />} />
        <Route
          path="/fundamental/tween/scrollTrigger"
          element={<TweenScrollTrigger />}
        />
        <Route path="/fundamental/tween/vars" element={<TweenVars />} />
        <Route path="/fundamental/tween/delay" element={<TweenDelay />} />
        <Route path="/fundamental/tween/duration" element={<TweenDuration />} />
        <Route path="/fundamental/tween/endTime" element={<TweenEndTime />} />
        <Route
          path="/fundamental/tween/eventCallback"
          element={<TweenEventCallback />}
        />
        <Route
          path="/fundamental/tween/globalTime"
          element={<TweenGlobalTime />}
        />
        <Route
          path="/fundamental/tween/invalidate"
          element={<TweenInvalidate />}
        />
        <Route path="/fundamental/tween/isActive" element={<TweenIsActive />} />
        <Route
          path="/fundamental/tween/iteration"
          element={<TweenIteration />}
        />
        <Route path="/fundamental/tween/kill" element={<TweenKill />} />
        <Route path="/fundamental/tween/pause" element={<TweenPause />} />
        <Route path="/fundamental/tween/paused" element={<TweenPaused />} />
        <Route path="/fundamental/tween/play" element={<TweenPlay />} />
        <Route path="/fundamental/tween/progress" element={<TweenProgress />} />
        <Route path="/fundamental/tween/repeat" element={<TweenRepeat />} />
        <Route
          path="/fundamental/tween/repeatDelay"
          element={<TweenRepeatDelay />}
        />
        <Route path="/fundamental/tween/restart" element={<TweenRestart />} />
        <Route path="/fundamental/tween/resume" element={<TweenResume />} />
        <Route path="/fundamental/tween/reverse" element={<TweenReverse />} />
        <Route path="/fundamental/tween/reversed" element={<TweenReversed />} />
        <Route path="/fundamental/tween/revert" element={<TweenRevert />} />
        <Route path="/fundamental/tween/seek" element={<TweenSeek />} />
        <Route
          path="/fundamental/tween/startTime"
          element={<TweenStartTime />}
        />
        <Route path="/fundamental/tween/targets" element={<TweenTargets />} />
        <Route path="/fundamental/tween/then" element={<TweenThen />} />
        <Route path="/fundamental/tween/time" element={<TweenTime />} />
        <Route
          path="/fundamental/tween/timeScale"
          element={<TweenTimeScale />}
        />
        <Route
          path="/fundamental/tween/totalDuration"
          element={<TweenTotalDuration />}
        />
        <Route
          path="/fundamental/tween/totalProgress"
          element={<TweenTotalProgress />}
        />
        <Route
          path="/fundamental/tween/totalTime"
          element={<TweenTotalTime />}
        />
        <Route path="/fundamental/tween/yoyo" element={<TweenYoyo />} />
        <Route
          path="/fundamental/easing/customBounce"
          element={<EasingCustomBounce />}
        />
        <Route
          path="/fundamental/easing/customEase"
          element={<EasingCustomEase />}
        />
        <Route
          path="/fundamental/easing/customWiggle"
          element={<EasingCustomWiggle />}
        />
        <Route
          path="/fundamental/easing/expoScaleEase"
          element={<EasingExpoScaleEase />}
        />
        <Route
          path="/fundamental/easing/roughEase"
          element={<EasingRoughEase />}
        />
        <Route path="/fundamental/easing/slowMo" element={<EasingSlowMo />} />
        <Route
          path="/fundamental/easing/steppedEase"
          element={<EasingSteppedEase />}
        />
        <Route path="/fundamental/timeline" element={<TimelineIndex />} />
        <Route path="/fundamental/timeline/data" element={<TimelineData />} />
        <Route
          path="/fundamental/timeline/labels"
          element={<TimelineLabels />}
        />
        <Route
          path="/fundamental/timeline/scrollTrigger"
          element={<TimelineScrollTrigger />}
        />
        <Route path="/fundamental/timeline/vars" element={<TimelineVars />} />
        <Route path="/fundamental/timeline/add" element={<TimelineAdd />} />
        <Route
          path="/fundamental/timeline/addLabel"
          element={<TimelineAddLabel />}
        />
        <Route path="/fundamental/timeline/call" element={<TimelineCall />} />
        <Route path="/fundamental/timeline/clear" element={<TimelineClear />} />
        <Route
          path="/fundamental/timeline/duration"
          element={<TimelineDuration />}
        />
        <Route
          path="/fundamental/timeline/endTime"
          element={<TimelineEndTime />}
        />
        <Route
          path="/fundamental/timeline/eventCallback"
          element={<TimelineEventCallback />}
        />
        <Route
          path="/fundamental/timeline/getChildren"
          element={<TimelineGetChildren />}
        />
        <Route
          path="/fundamental/timeline/globalTime"
          element={<TimelineGlobalTime />}
        />
        <Route
          path="/fundamental/timeline/invalidate"
          element={<TimelineInvalidate />}
        />
        <Route
          path="/fundamental/timeline/isActive"
          element={<TimelineIsActive />}
        />
        <Route path="/fundamental/timeline/kill" element={<TimelineKill />} />
        <Route path="/fundamental/timeline/pause" element={<TimelinePause />} />
        <Route
          path="/fundamental/timeline/paused"
          element={<TimelinePaused />}
        />
        <Route path="/fundamental/timeline/play" element={<TimelinePlay />} />
        <Route
          path="/fundamental/timeline/progress"
          element={<TimelineProgress />}
        />
        <Route
          path="/fundamental/timeline/remove"
          element={<TimelineRemove />}
        />
        <Route
          path="/fundamental/timeline/removeLabel"
          element={<TimelineRemoveLabel />}
        />
        <Route
          path="/fundamental/timeline/restart"
          element={<TimelineRestart />}
        />
        <Route
          path="/fundamental/timeline/resume"
          element={<TimelineResume />}
        />
        <Route
          path="/fundamental/timeline/reverse"
          element={<TimelineReverse />}
        />
        <Route
          path="/fundamental/timeline/reversed"
          element={<TimelineReversed />}
        />
        <Route path="/fundamental/timeline/seek" element={<TimelineSeek />} />
        <Route
          path="/fundamental/timeline/startTime"
          element={<TimelineStartTime />}
        />
        <Route path="/fundamental/timeline/time" element={<TimelineTime />} />
        <Route
          path="/fundamental/timeline/timeScale"
          element={<TimelineTimeScale />}
        />
        <Route
          path="/fundamental/timeline/totalDuration"
          element={<TimelineTotalDuration />}
        />
        <Route
          path="/fundamental/timeline/totalProgress"
          element={<TimelineTotalProgress />}
        />
        <Route
          path="/fundamental/timeline/totalTime"
          element={<TimelineTotalTime />}
        />
        <Route
          path="/fundamental/timeline/tweenTo"
          element={<TimelineTweenTo />}
        />
        <Route
          path="/fundamental/timeline/tweenFromTo"
          element={<TimelineTweenFromTo />}
        />
        <Route path="/fundamental/timeline/yoyo" element={<TimelineYoyo />} />
        <Route path="/plugins" element={<PluginsIndex />} />
        <Route
          path="/plugins/scrolltrigger/animation"
          element={<STAnimation />}
        />
        <Route
          path="/plugins/scrolltrigger/direction"
          element={<STDirection />}
        />
        <Route path="/plugins/scrolltrigger/start" element={<STStart />} />
        <Route path="/plugins/scrolltrigger/end" element={<STEnd />} />
        <Route
          path="/plugins/scrolltrigger/isActive"
          element={<STIsActive />}
        />
        <Route path="/plugins/scrolltrigger/isTouch" element={<STIsTouch />} />
        <Route path="/plugins/scrolltrigger/pin" element={<STPin />} />
        <Route
          path="/plugins/scrolltrigger/progress"
          element={<STProgress />}
        />
        <Route
          path="/plugins/scrolltrigger/scroller"
          element={<STScroller />}
        />
        <Route path="/plugins/scrolltrigger/trigger" element={<STTrigger />} />
        <Route path="/plugins/scrolltrigger/vars" element={<STVars />} />
        <Route path="/plugins/scrolltrigger/disable" element={<STDisable />} />
        <Route path="/plugins/scrolltrigger/enable" element={<STEnable />} />
        <Route
          path="/plugins/scrolltrigger/getTween"
          element={<STGetTween />}
        />
        <Route
          path="/plugins/scrolltrigger/getVelocity"
          element={<STGetVelocity />}
        />
        <Route path="/plugins/scrolltrigger/kill" element={<STKill />} />
        <Route
          path="/plugins/scrolltrigger/labelToScroll"
          element={<STLabelToScroll />}
        />
        <Route path="/plugins/scrolltrigger/next" element={<STNext />} />
        <Route
          path="/plugins/scrolltrigger/previous"
          element={<STPrevious />}
        />
        <Route
          path="/plugins/scrolltrigger/refresh-instance"
          element={<STRefreshInstance />}
        />
        <Route path="/plugins/scrolltrigger/scroll" element={<STScroll />} />
        <Route
          path="/plugins/scrolltrigger/addEventListener"
          element={<STAddEventListener />}
        />
        <Route path="/plugins/scrolltrigger/batch" element={<STBatch />} />
        <Route
          path="/plugins/scrolltrigger/clearMatchMedia"
          element={<STClearMatchMedia />}
        />
        <Route
          path="/plugins/scrolltrigger/clearScrollMemory"
          element={<STClearScrollMemory />}
        />
        <Route path="/plugins/scrolltrigger/config" element={<STConfig />} />
        <Route path="/plugins/scrolltrigger/create" element={<STCreate />} />
        <Route
          path="/plugins/scrolltrigger/defaults"
          element={<STDefaults />}
        />
        <Route path="/plugins/scrolltrigger/getAll" element={<STGetAll />} />
        <Route path="/plugins/scrolltrigger/getById" element={<STGetById />} />
        <Route
          path="/plugins/scrolltrigger/isInViewport"
          element={<STIsInViewport />}
        />
        <Route
          path="/plugins/scrolltrigger/isScrolling"
          element={<STIsScrolling />}
        />
        <Route path="/plugins/scrolltrigger/killAll" element={<STKillAll />} />
        <Route
          path="/plugins/scrolltrigger/matchMedia"
          element={<STMatchMedia />}
        />
        <Route
          path="/plugins/scrolltrigger/maxScroll"
          element={<STMaxScroll />}
        />
        <Route
          path="/plugins/scrolltrigger/normalizeScroll"
          element={<STNormalizeScroll />}
        />
        <Route path="/plugins/scrolltrigger/observe" element={<STObserve />} />
        <Route
          path="/plugins/scrolltrigger/positionInViewport"
          element={<STPositionInViewport />}
        />
        <Route
          path="/plugins/scrolltrigger/refresh-static"
          element={<STRefreshStatic />}
        />
        <Route
          path="/plugins/scrolltrigger/removeEventListener"
          element={<STRemoveEventListener />}
        />
        <Route
          path="/plugins/scrolltrigger/saveStyles"
          element={<STSaveStyles />}
        />
        <Route
          path="/plugins/scrolltrigger/scrollerProxy"
          element={<STScrollerProxy />}
        />
        <Route
          path="/plugins/scrolltrigger/snapDirectional"
          element={<STSnapDirectional />}
        />
        <Route path="/plugins/scrolltrigger/sort" element={<STSort />} />
        <Route path="/plugins/scrolltrigger/update" element={<STUpdate />} />
        <Route
          path="/plugins/scrollsmoother/progress"
          element={<SMProgress />}
        />
        <Route
          path="/plugins/scrollsmoother/scrollTrigger"
          element={<SMScrollTrigger />}
        />
        <Route path="/plugins/scrollsmoother/vars" element={<SMVars />} />
        <Route path="/plugins/scrollsmoother/content" element={<SMContent />} />
        <Route path="/plugins/scrollsmoother/effects" element={<SMEffects />} />
        <Route
          path="/plugins/scrollsmoother/getVelocity"
          element={<SMGetVelocity />}
        />
        <Route path="/plugins/scrollsmoother/kill" element={<SMKill />} />
        <Route path="/plugins/scrollsmoother/offset" element={<SMOffset />} />
        <Route path="/plugins/scrollsmoother/paused" element={<SMPaused />} />
        <Route
          path="/plugins/scrollsmoother/scrollTo"
          element={<SMScrollTo />}
        />
        <Route
          path="/plugins/scrollsmoother/scrollTop"
          element={<SMScrollTop />}
        />
        <Route path="/plugins/scrollsmoother/smooth" element={<SMSmooth />} />
        <Route path="/plugins/scrollsmoother/create" element={<SMCreate />} />
        <Route path="/plugins/scrollsmoother/get" element={<SMGet />} />
        <Route path="/plugins/scrollsmoother/wrapper" element={<SMWrapper />} />
        <Route path="/plugins/splittext/chars" element={<STXChars />} />
        <Route path="/plugins/splittext/isSplit" element={<STXIsSplit />} />
        <Route path="/plugins/splittext/lines" element={<STXLines />} />
        <Route path="/plugins/splittext/masks" element={<STXMasks />} />
        <Route path="/plugins/splittext/vars" element={<STXVars />} />
        <Route path="/plugins/splittext/words" element={<STXWords />} />
        <Route path="/plugins/splittext/revert" element={<STXRevert />} />
        <Route path="/plugins/splittext/split" element={<STXSplit />} />
        <Route path="/plugins/splittext/create" element={<STXCreate />} />
        <Route path="/plugins/drawsvg/getLength" element={<DrawGetLength />} />
        <Route
          path="/plugins/drawsvg/getPosition"
          element={<DrawGetPosition />}
        />
        <Route path="/plugins/easel" element={<EaselIndex />} />
        <Route path="/plugins/gsdevtools/create" element={<DevCreate />} />
        <Route
          path="/plugins/inertia/getVelocity"
          element={<InertiaGetVelocity />}
        />
        <Route
          path="/plugins/inertia/isTracking"
          element={<InertiaIsTracking />}
        />
        <Route path="/plugins/inertia/track" element={<InertiaTrack />} />
        <Route path="/plugins/inertia/untrack" element={<InertiaUntrack />} />
        <Route path="/plugins/velocity-tracker/target" element={<VTTarget />} />
        <Route
          path="/plugins/velocity-tracker/addProp"
          element={<VTAddProp />}
        />
        <Route path="/plugins/velocity-tracker/get" element={<VTGet />} />
        <Route
          path="/plugins/velocity-tracker/getByTarget"
          element={<VTGetByTarget />}
        />
        <Route
          path="/plugins/velocity-tracker/isTracking"
          element={<VTIsTracking />}
        />
        <Route
          path="/plugins/velocity-tracker/isTrackingProp"
          element={<VTIsTrackingProp />}
        />
        <Route
          path="/plugins/velocity-tracker/removeProp"
          element={<VTRemoveProp />}
        />
        <Route path="/plugins/velocity-tracker/track" element={<VTTrack />} />
        <Route
          path="/plugins/velocity-tracker/untrack"
          element={<VTUntrack />}
        />
        <Route
          path="/plugins/morphsvg/defaultRender"
          element={<MorphDefaultRender />}
        />
        <Route
          path="/plugins/morphsvg/defaultType"
          element={<MorphDefaultType />}
        />
        <Route
          path="/plugins/morphsvg/defaultUpdateTarget"
          element={<MorphDefaultUpdateTarget />}
        />
        <Route
          path="/plugins/morphsvg/convertToPath"
          element={<MorphConvertToPath />}
        />
        <Route
          path="/plugins/morphsvg/rawPathToString"
          element={<MorphRawPathToString />}
        />
        <Route
          path="/plugins/morphsvg/stringToRawPath"
          element={<MorphStringToRawPath />}
        />
        <Route
          path="/plugins/motionpath/arrayToRawPath"
          element={<MPArrayToRawPath />}
        />
        <Route
          path="/plugins/motionpath/convertCoordinates"
          element={<MPConvertCoordinates />}
        />
        <Route
          path="/plugins/motionpath/convertToPath"
          element={<MPConvertToPath />}
        />
        <Route
          path="/plugins/motionpath/getAlignMatrix"
          element={<MPGetAlignMatrix />}
        />
        <Route
          path="/plugins/motionpath/getGlobalMatrix"
          element={<MPGetGlobalMatrix />}
        />
        <Route path="/plugins/motionpath/getLength" element={<MPGetLength />} />
        <Route
          path="/plugins/motionpath/getPositionOnPath"
          element={<MPGetPositionOnPath />}
        />
        <Route
          path="/plugins/motionpath/getRawPath"
          element={<MPGetRawPath />}
        />
        <Route
          path="/plugins/motionpath/getRelativePosition"
          element={<MPGetRelativePosition />}
        />
        <Route
          path="/plugins/motionpath/pointsToSegment"
          element={<MPPointsToSegment />}
        />
        <Route
          path="/plugins/motionpath/rawPathToString"
          element={<MPRawPathToString />}
        />
        <Route
          path="/plugins/motionpath/sliceRawPath"
          element={<MPSliceRawPath />}
        />
        <Route
          path="/plugins/motionpath/stringToRawPath"
          element={<MPStringToRawPath />}
        />
        <Route path="/plugins/motionpathhelper/kill" element={<MPHKill />} />
        <Route
          path="/plugins/motionpathhelper/editPath"
          element={<MPHEditPath />}
        />
        <Route path="/plugins/observer/create" element={<ObserverCreate />} />
        <Route path="/plugins/observer/disable" element={<ObserverDisable />} />
        <Route path="/plugins/observer/enable" element={<ObserverEnable />} />
        <Route path="/plugins/observer/kill" element={<ObserverKill />} />
        <Route path="/plugins/observer/isTouch" element={<ObserverIsTouch />} />
        <Route path="/plugins/observer/deltaX" element={<ObsDeltaX />} />
        <Route path="/plugins/observer/deltaY" element={<ObsDeltaY />} />
        <Route path="/plugins/observer/event" element={<ObsEvent />} />
        <Route
          path="/plugins/observer/isDragging"
          element={<ObsIsDragging />}
        />
        <Route path="/plugins/observer/isEnabled" element={<ObsIsEnabled />} />
        <Route path="/plugins/observer/isPressed" element={<ObsIsPressed />} />
        <Route path="/plugins/observer/startX" element={<ObsStartX />} />
        <Route path="/plugins/observer/startY" element={<ObsStartY />} />
        <Route path="/plugins/observer/target" element={<ObsTarget />} />
        <Route path="/plugins/observer/vars" element={<ObsVars />} />
        <Route path="/plugins/observer/velocityX" element={<ObsVelocityX />} />
        <Route path="/plugins/observer/velocityY" element={<ObsVelocityY />} />
        <Route path="/plugins/observer/x" element={<ObsX />} />
        <Route path="/plugins/observer/y" element={<ObsY />} />
        <Route path="/plugins/physics2d" element={<Physics2DIndex />} />
        <Route path="/plugins/physicsprops" element={<PhysicsPropsIndex />} />
        <Route path="/plugins/pixi" element={<PixiIndex />} />
        <Route
          path="/plugins/pixi/registerPIXI"
          element={<PixiRegisterPIXI />}
        />
        <Route path="/plugins/scrambletext" element={<ScrambleTextIndex />} />
        <Route path="/plugins/scrollto/config" element={<ScrollToConfig />} />
        <Route path="/plugins/text" element={<TextPluginIndex />} />
        <Route
          path="/features-tools/utility-methods/checkPrefix"
          element={<UtilsCheckPrefix />}
        />
        <Route
          path="/features-tools/utility-methods/clamp"
          element={<UtilsClamp />}
        />
        <Route
          path="/features-tools/utility-methods/distribute"
          element={<UtilsDistribute />}
        />
        <Route
          path="/features-tools/utility-methods/getUnit"
          element={<UtilsGetUnit />}
        />
        <Route
          path="/features-tools/utility-methods/interpolate"
          element={<UtilsInterpolate />}
        />
        <Route
          path="/features-tools/utility-methods/mapRange"
          element={<UtilsMapRange />}
        />
        <Route
          path="/features-tools/utility-methods/normalize"
          element={<UtilsNormalize />}
        />
        <Route
          path="/features-tools/utility-methods/pipe"
          element={<UtilsPipe />}
        />
        <Route
          path="/features-tools/utility-methods/random"
          element={<UtilsRandom />}
        />
        <Route
          path="/features-tools/utility-methods/selector"
          element={<UtilsSelector />}
        />
        <Route
          path="/features-tools/utility-methods/shuffle"
          element={<UtilsShuffle />}
        />
        <Route
          path="/features-tools/utility-methods/snap"
          element={<UtilsSnap />}
        />
        <Route
          path="/features-tools/utility-methods/splitColor"
          element={<UtilsSplitColor />}
        />
        <Route
          path="/features-tools/utility-methods/toArray"
          element={<UtilsToArray />}
        />
        <Route
          path="/features-tools/utility-methods/unitize"
          element={<UtilsUnitize />}
        />
        <Route
          path="/features-tools/utility-methods/wrap"
          element={<UtilsWrap />}
        />
        <Route
          path="/features-tools/utility-methods/wrapYoyo"
          element={<UtilsWrapYoyo />}
        />
        <Route path="/plugins/flip/batch" element={<FlipBatch />} />
        <Route path="/plugins/flip/fit" element={<FlipFit />} />
        <Route path="/plugins/flip/from" element={<FlipFrom />} />
        <Route path="/plugins/flip/getState" element={<FlipGetState />} />
        <Route path="/plugins/flip/isFlipping" element={<FlipIsFlipping />} />
        <Route path="/plugins/flip/killFlipsOf" element={<FlipKillFlipsOf />} />
        <Route
          path="/plugins/flip/makeAbsolute"
          element={<FlipMakeAbsolute />}
        />
        <Route path="/plugins/flip/to" element={<FlipTo />} />
        <Route
          path="/plugins/draggable/autoScroll"
          element={<DGAutoScroll />}
        />
        <Route path="/plugins/draggable/deltaX" element={<DGDeltaX />} />
        <Route path="/plugins/draggable/deltaY" element={<DGDeltaY />} />
        <Route path="/plugins/draggable/isPressed" element={<DGIsPressed />} />
        <Route
          path="/plugins/draggable/isThrowing"
          element={<DGIsThrowing />}
        />
        <Route path="/plugins/draggable/lockAxis" element={<DGLockAxis />} />
        <Route
          path="/plugins/draggable/lockedAxis"
          element={<DGLockedAxis />}
        />
        <Route
          path="/plugins/draggable/maxRotation"
          element={<DGMaxRotation />}
        />
        <Route path="/plugins/draggable/maxX" element={<DGMaxX />} />
        <Route path="/plugins/draggable/maxY" element={<DGMaxY />} />
        <Route
          path="/plugins/draggable/minRotation"
          element={<DGMinRotation />}
        />
        <Route path="/plugins/draggable/minX" element={<DGMinX />} />
        <Route path="/plugins/draggable/minY" element={<DGMinY />} />
        <Route
          path="/plugins/draggable/pointerEvent"
          element={<DGPointerEvent />}
        />
        <Route path="/plugins/draggable/pointerX" element={<DGPointerX />} />
        <Route path="/plugins/draggable/pointerY" element={<DGPointerY />} />
        <Route path="/plugins/draggable/rotation" element={<DGRotation />} />
        <Route path="/plugins/draggable/startX" element={<DGStartX />} />
        <Route path="/plugins/draggable/startY" element={<DGStartY />} />
        <Route path="/plugins/draggable/target" element={<DGTarget />} />
        <Route path="/plugins/draggable/tween" element={<DGTween />} />
        <Route path="/plugins/draggable/vars" element={<DGVars />} />
        <Route path="/plugins/draggable/x" element={<DGX />} />
        <Route path="/plugins/draggable/y" element={<DGY />} />
        <Route path="/plugins/draggable/zIndex" element={<DGZIndex />} />
        <Route
          path="/plugins/draggable/endRotation"
          element={<DGEndRotation />}
        />
        <Route path="/plugins/draggable/endX" element={<DGEndX />} />
        <Route path="/plugins/draggable/endY" element={<DGEndY />} />
        <Route
          path="/plugins/draggable/addEventListener"
          element={<DGAddEventListener />}
        />
        <Route
          path="/plugins/draggable/applyBounds"
          element={<DGApplyBounds />}
        />
        <Route path="/plugins/draggable/create" element={<DGCreate />} />
        <Route path="/plugins/draggable/disable" element={<DGDisable />} />
        <Route path="/plugins/draggable/enable" element={<DGEnable />} />
        <Route path="/plugins/draggable/enabled" element={<DGEnabled />} />
        <Route path="/plugins/draggable/endDrag" element={<DGEndDrag />} />
        <Route path="/plugins/draggable/get" element={<DGGet />} />
        <Route
          path="/plugins/draggable/getDirection"
          element={<DGGetDirection />}
        />
        <Route path="/plugins/draggable/hitTest" element={<DGHitTest />} />
        <Route path="/plugins/draggable/kill" element={<DGKill />} />
        <Route path="/plugins/draggable/startDrag" element={<DGStartDrag />} />
        <Route
          path="/plugins/draggable/timeSinceDrag"
          element={<DGTimeSinceDrag />}
        />
        <Route path="/plugins/draggable/update" element={<DGUpdate />} />
        <Route
          path="/fundamental/internal-plugins"
          element={<InternalPluginsIndex />}
        />
        <Route
          path="/fundamental/internal-plugins/attributes"
          element={<InternalAttributes />}
        />
        <Route
          path="/fundamental/internal-plugins/endarray"
          element={<InternalEndArray />}
        />
        <Route
          path="/fundamental/internal-plugins/modifiers"
          element={<InternalModifiers />}
        />
        <Route
          path="/fundamental/internal-plugins/snap"
          element={<InternalSnap />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
import InternalPluginsIndex from "./pages/fundamental/internal-plugins/Index";
import InternalAttributes from "./pages/fundamental/internal-plugins/Attributes";
import InternalEndArray from "./pages/fundamental/internal-plugins/EndArray";
import InternalModifiers from "./pages/fundamental/internal-plugins/Modifiers";
import InternalSnap from "./pages/fundamental/internal-plugins/Snap";
