//the generate palette function that generates a 5 color palette based on 1 given color and 1 color harmony and returns all the colors as an array of Color objects

import { Color } from "../../types/Color";
import { ColorCluster } from "../../types/ColorCluster";
import { Harmony } from "../../types/Harmony";
import { Palette } from "../../types/Palette";

export function generatePalette(color: Color, harmony: Harmony): Palette {
  switch (harmony.name) {
    case "monochromatic":
      return generateMonocromaticPalette(color);
    case "analogous":
      return generateAnalogousPalette(color);
    case "complementary":
      return generateComplementaryPalette(color);
    case "triad":
      return generateTriadicPalette(color);
    case "tetrad":
      return generateTetradicPalette(color);
    case "split-complementary":
      return generateSplitComplementaryPalette(color);
    default:
      throw new Error("Invalid harmony");
  }
}

//function that generates a triadic palette based on a given color
function generateComplementaryPalette(color: Color): Palette {
  let secondary = color.getComplimentary().rename("secondary");

  let palette: Palette = new Palette({
    primary: new ColorCluster(color),
    secondary: new ColorCluster(secondary),
  });
  return palette;
}

function generateSplitComplementaryPalette(color: Color): Palette {
  let secondary = color.clone().rotate(150).rename("secondary");
  let secondaryVariant = color.clone().rotate(-150).rename("secondary_variant");

  let palette: Palette = new Palette({
    primary: new ColorCluster(color),
    secondary: new ColorCluster(secondary, secondaryVariant),
  });
  return palette;
}

//function that generates a monochromatic palette based on a given color

function generateMonocromaticPalette(color: Color): Palette {
  let secondary = color.clone().darken(20).rename("secondary");

  let palette: Palette = new Palette({
    primary: new ColorCluster(color),
    secondary: new ColorCluster(secondary),
  });
  return palette;
}

function generateAnalogousPalette(color: Color): Palette {
  let secondary = color.clone().rotate(30).rename("secondary");
  let secondaryVariant = color.clone().rotate(-30).rename("secondary_variant");

  let palette: Palette = new Palette({
    primary: new ColorCluster(color),
    secondary: new ColorCluster(secondary, secondaryVariant),
  });
  return palette;
}

function generateTriadicPalette(color: Color): Palette {
  let secondary = color.clone().rotate(120).rename("secondary");
  let secondaryVariant = color.clone().rotate(-120).rename("secondary_variant");

  let palette: Palette = new Palette({
    primary: new ColorCluster(color),
    secondary: new ColorCluster(secondary, secondaryVariant),
  });
  return palette;
}

function generateTetradicPalette(color: Color): Palette {
  let secondary = color.clone().rotate(60).rename("secondary");
  let secondaryVariant = color.clone().rotate(-60).rename("secondary_variant");
  let primaryVariant = color.clone().rotate(180).rename("primary_variant");

  let palette: Palette = new Palette({
    primary: new ColorCluster(color, primaryVariant),
    secondary: new ColorCluster(secondary, secondaryVariant),
  });
  return palette;
}
