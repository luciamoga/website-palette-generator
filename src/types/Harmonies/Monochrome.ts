//Monochrome type extends Harmony type

import { Color } from "../Color";
import { ColorCluster } from "../ColorCluster";
import { Harmony } from "./Harmony";

export class Monochrome extends Harmony {
  primary: ColorCluster;
  secondary: ColorCluster;
  constructor({ main }: { main: Color }) {
    super({ main: main });

    let primaryVariant = main.getVariant();
    let secondary = primaryVariant.getVariant();
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
