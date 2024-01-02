//Palette class containing primaryVariant, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError

import { Analogous } from "./Harmonies/Analogous";
import { Color } from "./Color";
import { Complementary } from "./Harmonies/Complementary";
import { Harmony } from "./Harmonies/Harmony";
import { Monochrome } from "./Harmonies/Monochrome";
import { SplitComplementary } from "./Harmonies/SplitComplementary";
import { Tetradic } from "./Harmonies/Tetradic";
import { Triadic } from "./Harmonies/Triadic";
import { HarmonyType } from "./HarmonyTypes";

//An object containing the different types of color harmonies

export class Palette {
  harmony: Harmony;

  constructor({
    color,
    harmonyType,
  }: {
    color: Color;
    harmonyType: HarmonyType;
  }) {
    switch (harmonyType) {
      case HarmonyType.Complementary:
        this.harmony = new Complementary({ main: color });
        break;
      case HarmonyType.SplitComplementary:
        this.harmony = new SplitComplementary({ main: color });
        break;
      case HarmonyType.Monochromatic:
        this.harmony = new Monochrome({ main: color });
        break;
      case HarmonyType.Analogous:
        this.harmony = new Analogous({ main: color });
        break;
      case HarmonyType.Triadic:
        this.harmony = new Triadic({ main: color });
        break;
      case HarmonyType.Tetradic:
        this.harmony = new Tetradic({ main: color });
        break;
      default:
        throw new Error(
          "Invalid harmony: " + harmonyType + " " + HarmonyType.Analogous
        );
    }
  }

  getColors() {
    return this.harmony.getColors();
  }
}
