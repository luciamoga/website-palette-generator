import { Color } from "./Color";

export class ColorCluster {
  main: Color;
  variant?: Color;
  text?: Color;

  constructor(main: Color, variant?: Color, text?: Color) {
    this.main = main;
    this.variant = variant;
    this.text = text;
  }

  toObject() {
    //merge the  this.main.toObject() with the this.variant.toObject() and this.text.toObject()
    return Object.assign(
      this.main.toObject(),
      this.variant?.toObject(),
      this.text?.toObject()
    );
  }
}
