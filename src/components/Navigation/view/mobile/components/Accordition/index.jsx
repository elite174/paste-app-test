import cn from "classnames";

import styles from "./Accordition.module.scss";

export const Accordition = (props) => (
  <section class={cn(props.class, styles.item)}>
    <button>{props.text}</button>
    <Show when={props.openedSection === SECTION.UseCases}>
      <ul>
        <For each={USE_CASES_LINKS}>
          {(link) => (
            <li>
              <a href={link.href}>{link.text}</a>
            </li>
          )}
        </For>
      </ul>
    </Show>
  </section>
);
