//Analogous type extends Harmony type

import { Color } from "../Color";
import { ColorCluster } from "../ColorCluster";
import { Harmony } from "./Harmony";

export class Analogous extends Harmony {
  primary: ColorCluster;
  secondary: ColorCluster;
  constructor({ main }: { main: Color }) {
    super({ main: main });

    let primaryVariant = main.getRotated(-10);
    let secondary = main.getRotated(30);
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
