import { Navigation } from "./components/Navigation";
import { BlankScreen } from "./components/BlankScreen";

import { useHeaderTheme } from "./features/header-theme";

import { THEME } from "core/constants";

import styles from "./App.module.scss";

function App() {
  const theme = useHeaderTheme();

  return (
    <main class={styles.container}>
      <Navigation class={styles.navigation} theme={theme()} />
      <BlankScreen theme={THEME.Light} />
      <BlankScreen theme={THEME.Dark} />
      <BlankScreen theme={THEME.Light} />
      <BlankScreen theme={THEME.Dark} />
    </main>
  );
}

export default App;
