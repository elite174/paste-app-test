import { createSignal, onMount, onCleanup } from "solid-js";

const DATA_ATTRIBUTE_NAME = "data-header-background";

export const getTargetElementAttributes = (theme) => ({
  [DATA_ATTRIBUTE_NAME]: theme,
});

const SCROLL_DIRECTION = {
  Up: "up",
  Down: "down",
};

// todo split this into 2 hooks
export const useHeaderTheme = () => {
  const [theme, setTheme] = createSignal("light");

  let prevScrollTop = 0;
  let currentScrollTop = 0;
  let scrollDirection;

  onMount(() => {
    const handleScroll = () => {
      prevScrollTop = currentScrollTop;
      currentScrollTop = document.documentElement.scrollTop;

      scrollDirection =
        currentScrollTop - prevScrollTop > 0
          ? SCROLL_DIRECTION.Down
          : SCROLL_DIRECTION.Up;
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (
            scrollDirection === SCROLL_DIRECTION.Down &&
            entry.intersectionRatio < 0.5
          )
            continue;

          if (
            scrollDirection === SCROLL_DIRECTION.Up &&
            entry.intersectionRatio > 0.5
          )
            continue;
        
          if (!entry.isIntersecting) continue;

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

    onCleanup(() => {
      intersectionObserver.disconnect();
      document.removeEventListener("scroll", handleScroll);
    });
  });

  return theme;
};
