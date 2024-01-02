//Complementary type extends Harmony type

import { Color } from "../Color";
import { ColorCluster } from "../ColorCluster";
import { Harmony } from "./Harmony";

export class Complementary extends Harmony {
  primary: ColorCluster;
  secondary: ColorCluster;
  constructor({ main }: { main: Color }) {
    super({ main: main });

    let primaryVariant = main.getRotated(180);
    let secondary = main.getComplimentary();
    let secondaryVariant = secondary.getVariant();

    this.primary = new ColorCluster({
      main,
      variant: primaryVariant,
    });
    this.secondary = new ColorCluster({
      main: secondary,
      variant: secondaryVariant,
    });
  }
}
