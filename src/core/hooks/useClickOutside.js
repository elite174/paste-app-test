import { onCleanup, createEffect, on } from "solid-js";

const defaultEnabled = () => true;

export const useClickOutside = ({
  element,
  callback,
  enabled = defaultEnabled,
}) => {
  createEffect(
    on(enabled, (isEventListenerEnabled) => {
      if (!isEventListenerEnabled) return;

      const clickOutsideHandler = (event) => {
        const el = element();

        if (!el) return;

        if (event.composedPath().includes(el)) return;

        callback();
      };

      document.addEventListener("click", clickOutsideHandler);

      onCleanup(() =>
        document.removeEventListener("click", clickOutsideHandler)
      );
    })
  );
};
