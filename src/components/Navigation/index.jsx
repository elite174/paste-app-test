import cn from "classnames";

import { Logo } from "../Logo";
import { Dropdown } from "./components/Dropdown";

import { USE_CASES_LINKS, RESOURCES_LINKS } from "./constants";

import styles from "./Navigation.module.scss";
import commonStyles from "./common/styles.module.scss";

const defaultTheme = "light";
const getDataAttributes = (theme = defaultTheme) => ({ ["data-theme"]: theme });

export const Navigation = (props) => {
  return (
    <nav
      {...getDataAttributes(props.theme)}
      class={cn(props.class, styles.container)}
    >
      <Logo class={styles.logo} />
      <div class={styles.buttonContainer}>
        <Dropdown
          theme={props.theme}
          text="Use cases"
          links={USE_CASES_LINKS}
        />
        <Dropdown
          theme={props.theme}
          text="Resources"
          links={RESOURCES_LINKS}
        />
        <a class={commonStyles.link} href="#">
          Updates
        </a>
        <a class={commonStyles.link} href="#">
          Pricing
        </a>
      </div>
      <button class={cn(styles.button, "button")}>Try for free</button>
    </nav>
  );
};
