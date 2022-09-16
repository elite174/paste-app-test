import { Show, createSignal, createEffect, onCleanup } from "solid-js";
import cn from "classnames";

import { Logo } from "components/Logo";
import { LinkList } from "../common/components/LinkList";

import { USE_CASES_LINKS, RESOURCES_LINKS } from "../../constants";

import accorditionStyles from "./Accordition.module.scss";
import styles from "./Navigation.mobile.module.scss";

export const NavigationMobile = (props) => {
  const [opened, setOpened] = createSignal(false);

  createEffect(() => {
    if (opened()) {
      // use lib here
      document.documentElement.style.overflow = "hidden";

      onCleanup(() => {
        document.documentElement.style.overflow = "";
      });
    }
  });

  return (
    <nav
      class={cn(props.class, styles.container, {
        [styles.fullscreen]: opened(),
      })}
      data-theme={props.theme}
    >
      <div class={styles.row}>
        <Logo theme={props.theme} />
        <button
          class={cn(styles.menuButton, { [styles.opened]: opened() })}
          onClick={() => setOpened((open) => !open)}
        />
      </div>
      <Show when={opened()}>
        <menu class={styles.menuContainer}>
          <LinkList
            class={styles.item}
            text="Use cases"
            links={USE_CASES_LINKS}
            styles={accorditionStyles}
          />
          <LinkList
            class={styles.item}
            text="Resources"
            links={RESOURCES_LINKS}
            styles={accorditionStyles}
          />
          <a href="" class={cn(accorditionStyles.button, styles.item)}>
            Updates
          </a>
          <a href="" class={cn(accorditionStyles.button, styles.item)}>
            Pricing
          </a>
        </menu>
      </Show>
    </nav>
  );
};
