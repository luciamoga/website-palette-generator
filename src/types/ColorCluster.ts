import { Color } from "./Color";

export class ColorCluster {
  main: Color;
  variant?: Color;
  text?: Color;
  variantText?: Color;

  constructor({ main, variant }: { main: Color; variant?: Color }) {
    this.main = main;
    this.variant = variant;
    this.text = main.getContrasting();
    this.variantText = variant?.getContrasting();
  }

  getColors() {
    return {
      main: this.main.hex,
      variant: this.variant?.hex,
      text: this.text?.hex,
      variantText: this.variantText?.hex,
    };
  }
}
