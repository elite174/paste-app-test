import { createSignal, onMount, onCleanup } from "solid-js";

export const SCROLL_DIRECTION = {
  Up: "up",
  Down: "down",
};

export const useScrollDirection = () => {
  // for this test task it's not necessary to have scrollDirection as a signal
  // however it might be useful in a big project
  const [scrollDirection, setScrollDirection] = createSignal(
    SCROLL_DIRECTION.Down
  );

  let prevScrollTop = 0;
  let currentScrollTop = 0;

  const handleScroll = () => {
    prevScrollTop = currentScrollTop;
    currentScrollTop = document.documentElement.scrollTop;

    setScrollDirection(
      currentScrollTop - prevScrollTop > 0
        ? SCROLL_DIRECTION.Down
        : SCROLL_DIRECTION.Up
    );
  };

  onMount(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });

    onCleanup(() => document.removeEventListener("scroll", handleScroll));
  });

  return scrollDirection;
};
