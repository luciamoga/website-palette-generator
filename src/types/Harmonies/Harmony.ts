import { Color } from "../Color";
import { ColorCluster } from "../ColorCluster";

//Harmony data type
export abstract class Harmony {
  background: ColorCluster;
  surface: ColorCluster;
  error: ColorCluster;
  abstract primary: ColorCluster;
  abstract secondary: ColorCluster;

  constructor({ main }: { main: Color }) {
    const backgroundColor = main.getLessSaturated(50).lighten(30);

    const surfaceColor = main.getLessSaturated(40).lighten(20);

    const errorColor = main.getRedVariant();

    this.background = new ColorCluster({
      main: backgroundColor,
    });
    this.surface = new ColorCluster({
      main: surfaceColor,
    });
    this.error = new ColorCluster({
      main: errorColor,
    });
  }

  getColors() {
    return {
      background: this.background.getColors(),
      surface: this.surface.getColors(),
      error: this.error.getColors,
      primary: this.primary.getColors(),
      secondary: this.secondary.getColors(),
    };
  }
}
