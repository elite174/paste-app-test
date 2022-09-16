import cn from "classnames";

import { getTargetElementAttributes } from "../../features/header-theme";

import styles from "./BlankScreen.module.scss";

export const BlankScreen = (props) => (
  <section
    {...getTargetElementAttributes(props.theme)}
    class={cn(styles.container, { [styles[props.theme]]: true })}
  />
);
