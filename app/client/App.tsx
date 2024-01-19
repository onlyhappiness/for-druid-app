import Navigation from "./Navigation";

import { TamaguiProvider } from "tamagui";

import { tamaguiConfig } from "../../tamagui.config";

const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Navigation />
    </TamaguiProvider>
  );
};

export default App;
