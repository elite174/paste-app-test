import cn from "classnames";

import logoImage from "./assets/logo.svg";

import styles from "./Logo.module.scss";

// Here it might be useful to preserve the space for the image
// by passing width and height attributes
export const Logo = (props) => (
  <div class={cn(styles.container, props.class)}>
    <img src={logoImage} class={styles.logo} width="36" height="36" alt="logo" />
    <span class={styles.text}>
      <b>Paste</b>
    </span>
  </div>
);
