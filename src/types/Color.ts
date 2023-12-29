//Color class

export class Color {
  hex: string = "000000";
  type: string;
  constructor({
    hex,
    hsl,
    type,
  }: {
    hex?: string;
    hsl?: [number, number, number];
    type: string;
  }) {
    if (hex) {
      this.hex = hex;
    } else if (hsl) {
      this.hex = this.hslToHex(hsl);
    } else {
      console.log("Either hex or hsl must be defined for type " + type);
    }
    this.type = type;
  }

  get hsl(): [number, number, number] {
    return this.hexToHSL(this.hex);
  }

  get rgb(): [number, number, number] {
    return this.hexToRGB(this.hex);
  }

  get luminance(): number {
    let a = this.rgb.map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  toObject() {
    return { [this.type]: `#${this.hex}` };
  }
  getErrorVariant() {
    // Convert the main color to HSL
    const hslMain = this.rgbToHSL(this.hex);

    // Define a red hue, adjust saturation if needed, and use the main color's lightness
    const hslError = {
      h: 0, // Red hue
      s: 50, // This is an example saturation level, you may need to adjust
      l: hslMain.l, // Use the lightness from the main color
    };

    // Convert the error color back to your desired format, e.g., HEX
    const hexError = this.hslToHex([hslError.h, hslError.s, hslError.l]);

    return new Color({ hex: hexError, type: "error" });
  }

  clone(): Color {
    return new Color({ hex: this.hex, type: this.type });
  }

  rename(newName: string): Color {
    this.type = newName;
    return this;
  }

  getComplimentary(): Color {
    let [h, s, l] = this.hsl;
    h = (h + 180) % 360;
    return new Color({ hsl: [h, s, l], type: this.type });
  }

  lighten(amount: number): Color {
    let [h, s, l] = this.hsl;
    l = Math.min(l + amount, 100);
    this.hex = this.hslToHex([h, s, l]);
    return this;
  }

  darken(amount: number): Color {
    let [h, s, l] = this.hsl;
    l = Math.max(l - amount, 0);
    this.hex = this.hslToHex([h, s, l]);
    return this;
  }

  saturate(amount: number): Color {
    let [h, s, l] = this.hsl;
    s = Math.min(s + amount, 100);
    this.hex = this.hslToHex([h, s, l]);
    return this;
  }

  desaturate(amount: number): Color {
    let [h, s, l] = this.hsl;
    s = Math.max(s - amount, 0);
    this.hex = this.hslToHex([h, s, l]);
    return this;
  }

  rotate(amount: number): Color {
    let [h, s, l] = this.hsl;
    h = (h + amount) % 360;
    this.hex = this.hslToHex([h, s, l]);
    return this;
  }

  getContrastRatio(color: Color): number {
    let luminance1 = this.luminance;
    let luminance2 = color.luminance;
    return luminance1 > luminance2
      ? (luminance1 + 0.05) / (luminance2 + 0.05)
      : (luminance2 + 0.05) / (luminance1 + 0.05);
  }

  hexToRGB(hex: string): [number, number, number] {
    let r: number = parseInt(hex.slice(1, 3), 16);
    let g: number = parseInt(hex.slice(3, 5), 16);
    let b: number = parseInt(hex.slice(5, 7), 16);

    return [r, g, b];
  }

  hslToHex(hsl: [number, number, number]): string {
    let h: number = hsl[0];
    let s: number = hsl[1];
    let l: number = hsl[2];

    l /= 100;
    const a: number = (s * Math.min(l, 1 - l)) / 100;
    const f: Function = (n: number) => {
      const k: number = (n + h / 30) % 12;
      const color: number = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  rgbToHSL(rgb: string) {
    // Strip the leading # if it's there
    rgb = rgb.replace(/^\s*#|\s*$/g, "");

    // Convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (rgb.length == 3) {
      rgb = rgb.replace(/(.)/g, "$1$1");
    }

    let r = parseInt(rgb.substr(0, 2), 16) / 255,
      g = parseInt(rgb.substr(2, 2), 16) / 255,
      b = parseInt(rgb.substr(4, 2), 16) / 255,
      cMax = Math.max(r, g, b),
      cMin = Math.min(r, g, b),
      delta = cMax - cMin,
      l = (cMax + cMin) / 2,
      s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)),
      h = 0;

    switch (cMax) {
      case r:
        h = ((g - b) / delta) % 6;
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    return { h: h, s: s * 100, l: l * 100 };
  }

  hexToHSL(hex: string): [number, number, number] {
    // Convert hex to RGB first
    let r: number = parseInt(hex.slice(1, 3), 16) / 255;
    let g: number = parseInt(hex.slice(3, 5), 16) / 255;
    let b: number = parseInt(hex.slice(5, 7), 16) / 255;

    // Then to HSL
    let cmin: number = Math.min(r, g, b),
      cmax: number = Math.max(r, g, b),
      delta: number = cmax - cmin,
      h: number = 0,
      s: number = 0,
      l: number = 0;

    if (delta === 0) h = 0;
    else if (cmax === r) h = ((g - b) / delta) % 6;
    else if (cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Converting to percentages
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [h, s, l];
  }
}
