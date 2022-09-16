import { Navigation } from "components/Navigation";
import { BlankScreen } from "components/BlankScreen";

import { useHeaderTheme } from "features/header-theme";
import { useScrollDirection } from "features/scroll-direction";
import { useDevice } from "features/device";

import { THEME } from "core/constants";

import styles from "./App.module.scss";

function App() {
  // For this simple test task I don't use contexts and stuff
  // because here it's an overhead
  // However in the big app I'd make a service with context and provider (if we really need it)
  const scrollDirection = useScrollDirection();
  const theme = useHeaderTheme({ scrollDirection });
  const device = useDevice();

  return (
    <main class={styles.container}>
      <Navigation class={styles.navigation} theme={theme()} device={device()} />
      <BlankScreen theme={THEME.Light} />
      <BlankScreen theme={THEME.Dark} />
      <BlankScreen theme={THEME.Light} />
      <BlankScreen theme={THEME.Dark} />
    </main>
  );
}

export default App;
