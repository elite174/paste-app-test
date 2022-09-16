import { Dynamic, Suspense } from "solid-js/web";
import { lazy } from "solid-js";

import { DEVICE } from "features/device";

const LazyDesktopView = lazy(() =>
  import("./view/desktop").then(({ NavigationDesktop }) => ({
    default: NavigationDesktop,
  }))
);

const LazyMobileView = lazy(() =>
  import("./view/mobile").then(({ NavigationMobile }) => ({
    default: NavigationMobile,
  }))
);

// I don't want to blow up the component with different states and logic
// so I decided split the view into two parts
// Depending on the platform we'll load only necessary components
export const Navigation = (props) => {
  const componentToRender = () =>
    props.device === DEVICE.Mobile ? LazyMobileView : LazyDesktopView;

  return (
    // here we can show something while loading
    // or just listen outside this component if the resource is ready
    <Suspense>
      <Dynamic
        component={componentToRender()}
        class={props.class}
        theme={props.theme}
      />
    </Suspense>
  );
};
