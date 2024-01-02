//SplitComplementary type extends Harmony type

import { Color } from "../Color";
import { ColorCluster } from "../ColorCluster";
import { Harmony } from "./Harmony";

export class SplitComplementary extends Harmony {
  primary: ColorCluster;
  secondary: ColorCluster;
  constructor({ main }: { main: Color }) {
    super({ main: main });

    let primaryVariant = main.getRotated(150);
    let secondary = primaryVariant.getVariant();
    let secondaryVariant = main.getRotated(210);

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
