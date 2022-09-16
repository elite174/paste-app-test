import { createSignal, onMount, onCleanup } from "solid-js";

import { SCROLL_DIRECTION } from "./scroll-direction";

const DATA_ATTRIBUTE_NAME = "data-header-background";

export const getTargetElementAttributes = (theme) => ({
  [DATA_ATTRIBUTE_NAME]: theme,
});

// todo split this into 2 hooks
export const useHeaderTheme = (params) => {
  const [theme, setTheme] = createSignal("light");

  onMount(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          if (
            params.scrollDirection() === SCROLL_DIRECTION.Down &&
            entry.intersectionRatio < 0.5
          )
            continue;

          if (
            params.scrollDirection() === SCROLL_DIRECTION.Up &&
            entry.intersectionRatio > 0.5
          )
            continue;

          setTheme(entry.target.getAttribute(DATA_ATTRIBUTE_NAME));
        }
      },
      {
        threshold: [0.05, 0.95],
      }
    );

    const targetElements = document.querySelectorAll(
      `[${DATA_ATTRIBUTE_NAME}]`
    );

    for (const target of targetElements) {
      intersectionObserver.observe(target);
    }

    onCleanup(() => intersectionObserver.disconnect());
  });

  return theme;
};
