import logoImage from "./assets/logo.svg";

import styles from "./Logo.module.scss";

export const Logo = (props) => (
  <div class={styles.container} classList={{ [props.class]: true }}>
    <img src={logoImage} class={styles.logo} />
    <span class={styles.text}>
      <b>Paste</b>
    </span>
  </div>
);
