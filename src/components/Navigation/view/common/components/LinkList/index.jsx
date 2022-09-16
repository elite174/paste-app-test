import { createSignal, For, Show } from "solid-js";
import cn from "classnames";

import { useClickOutside } from "core/hooks/useClickOutside";

import { Icon } from "../../../../../Icon";

// I noticed that dropdown for mobile and desktop views has
// the same structure.
// So I decided to apply interesting strategy: I pass with props only css file
export const LinkList = (props) => {
  const [opened, setOpened] = createSignal(false);

  let containerRef;

  useClickOutside({
    element: () => containerRef,
    enabled: opened,
    callback: () => setOpened(false),
  });

  return (
    <section class={cn(props.styles.container, props.class)} ref={containerRef}>
      <button
        class={cn(props.styles.button, {
          [props.styles.opened]: opened(),
        })}
        onClick={() => setOpened((open) => !open)}
      >
        {props.text}
        <Icon
          name="arrowDown"
          class={cn(props.styles.icon, { [props.styles.rotated]: !opened() })}
        />
      </button>
      <Show when={opened()}>
        <ul class={cn(props.styles.panel, "anim-appear")}>
          <For each={props.links}>
            {(link) => (
              <li>
                <a class={cn(props.styles.link)} href={link.href}>
                  {link.text}
                </a>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </section>
  );
};
