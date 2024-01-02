//Color class

export class Color {
  hex: string = "000000";
  constructor({ hex, hsl }: { hex?: string; hsl?: [number, number, number] }) {
    if (hex) {
      this.hex = hex;
    } else if (hsl) {
      this.hex = this.hslToHex(hsl);
    } else {
      console.log("Either hex or hsl must be defined");
    }
  }

  get hsl(): [number, number, number] {
    return this.hexToHSL(this.hex);
  }

  get rgb(): [number, number, number] {
    return this.hexToRGB(this.hex);
  }

  getSaturation(): number {
    return this.hsl[1];
  }

  get luminance(): number {
    let a = this.rgb.map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
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

    return new Color({ hex: hexError });
  }

  clone(): Color {
    return new Color({ hex: this.hex });
  }

  getVariant(): Color {
    const lumThreshold = { low: 0.3, high: 0.7 };
    const satThreshold = { low: 30, high: 70 };

    if (
      this.luminance > lumThreshold.high &&
      this.getSaturation() > satThreshold.high
    ) {
      return this.clone().darken(20);
    } else if (this.luminance < lumThreshold.low) {
      return this.clone().lighten(20);
    } else {
      return this.clone().darken(10);
    }
  }

  getRedVariant(): Color {
    let saturation = Math.min(this.hsl[1] * 1.2, 100);
    let lightness = this.hsl[2] > 50 ? 50 : this.hsl[2];
    return new Color({
      hsl: [0, saturation, lightness], // 0 is the hue for red
    });
  }

  getContrasting(): Color {
    return this.luminance > 0.5
      ? this.clone().darken(90)
      : this.clone().lighten(90);
  }

  getComplimentary(): Color {
    let [h, s, l] = this.hsl;
    h = (h + 180) % 360;
    return new Color({ hsl: [h, s, l] });
  }

  getLighter(amount: number): Color {
    return this.clone().lighten(amount);
  }

  getDarker(amount: number): Color {
    return this.clone().darken(amount);
  }

  getMoreSaturated(amount: number): Color {
    return this.clone().saturate(amount);
  }

  getLessSaturated(amount: number): Color {
    return this.clone().desaturate(amount);
  }

  getRotated(amount: number): Color {
    return this.clone().rotate(amount);
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
