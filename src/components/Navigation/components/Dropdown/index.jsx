import { createSignal, For, Show } from "solid-js";
import cn from "classnames";

import { useClickOutside } from "core/hooks/useClickOutside";

import { Icon } from "../../../Icon";

import styles from "./Dropdown.module.scss";
import commonStyles from "../../common/styles.module.scss";

export const Dropdown = (props) => {
  const [opened, setOpened] = createSignal(false);

  let containerRef;

  useClickOutside({
    element: () => containerRef,
    enabled: opened,
    callback: () => setOpened(false),
  });

  return (
    <section
      class={cn(styles.container, props.class, "anim-appear")}
      data-theme={props.theme}
      ref={containerRef}
    >
      <button
        class={cn(styles.button, commonStyles.link, {
          [styles.opened]: opened(),
        })}
        onClick={() => setOpened((open) => !open)}
      >
        {props.text}
        <Icon
          name="arrowDown"
          class={cn(styles.icon, { [styles.rotated]: !opened() })}
        />
      </button>
      <Show when={opened()}>
        <ul class={styles.panel}>
          <For each={props.links}>
            {(link) => (
              <li>
                <a class={cn(styles.link, commonStyles.link)} href={link.href}>
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
