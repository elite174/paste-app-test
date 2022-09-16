import { Dynamic } from "solid-js/web";

import { ArrowDown } from "./icons/arrow-down";

import styles from "./Icon.module.scss";

const iconMap = {
  // no code splitting for this at the moment
  arrowDown: ArrowDown,
};

export const Icon = (props) => (
  <div classList={{ [props.class]: true, [styles.container]: true }}>
    <Dynamic component={iconMap[props.name]} />
  </div>
);
