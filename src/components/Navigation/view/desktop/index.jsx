import cn from "classnames";

import { Logo } from "components/Logo";
import { LinkList } from "../common/components/LinkList";

import { USE_CASES_LINKS, RESOURCES_LINKS } from "../../constants";

import styles from "./Navigation.desktop.module.scss";
import dropdownStyles from "./Dropdown.module.scss";

export const NavigationDesktop = (props) => {
  return (
    <nav
      data-theme={props.theme}
      class={cn(props.class, styles.container)}
    >
      <Logo class={styles.logo} />
      <div class={styles.buttonContainer}>
        <LinkList
          text="Use cases"
          links={USE_CASES_LINKS}
          styles={dropdownStyles}
        />
        <LinkList
          text="Resources"
          links={RESOURCES_LINKS}
          styles={dropdownStyles}
        />
        <a class={dropdownStyles.link} href="#">
          Updates
        </a>
        <a class={dropdownStyles.link} href="#">
          Pricing
        </a>
      </div>
      <button class={cn(styles.button, "button")}>Try for free</button>
    </nav>
  );
};
