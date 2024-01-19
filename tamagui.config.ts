import { config } from "@tamagui/config";

import { createTamagui } from "tamagui";

export const tamaguiConfig = createTamagui(config);
// export const config = createTamagui();

export default tamaguiConfig;

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
