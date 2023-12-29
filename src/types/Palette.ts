//Palette class containing primaryVariant, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError

import { ColorCluster } from "./ColorCluster";

export class Palette {
  primary: ColorCluster;
  secondary: ColorCluster;
  background: ColorCluster;
  surface: ColorCluster;
  error: ColorCluster;

  constructor({
    primary,
    secondary,
  }: {
    primary: ColorCluster;
    secondary: ColorCluster;
  }) {
    this.primary = primary;
    this.secondary = secondary;

    this.primary.variant = primary.variant
      ? primary.variant
      : primary.main.clone().darken(20).rename("primary_variant");

    this.primary.text =
      this.primary.main.luminance > 0.5
        ? this.primary.main.clone().darken(90).rename("on_primary")
        : this.primary.main.clone().lighten(90).rename("on_primary");
    this.secondary.variant = secondary.variant
      ? secondary.variant
      : secondary.main.clone().darken(20).rename("secondary_variant");

    this.secondary.text =
      this.secondary.main.luminance > 0.5
        ? this.secondary.main.clone().darken(90).rename("on_secondary")
        : this.secondary.main.clone().lighten(90).rename("on_secondary");

    this.background = new ColorCluster(
      primary.main
        .clone()
        .lighten(Math.min(primary.main.luminance + 20, 100))
        .rename("background")
    );
    this.background.text =
      this.background.main.luminance > 0.5
        ? this.background.main.clone().darken(90).rename("on_background")
        : this.background.main.clone().lighten(90).rename("on_background");

    this.surface = new ColorCluster(
      this.background.main
        .clone()
        .lighten(Math.min(primary.main.luminance + 20, 100))
        .rename("surface")
    );
    this.surface.text =
      this.surface.main.luminance > 0.5
        ? this.surface.main.clone().darken(90).rename("on_surface")
        : this.surface.main.clone().lighten(90).rename("on_surface");

    this.error = new ColorCluster(
      this.primary.main.getErrorVariant().rename("error")
    );
    this.error.text =
      this.error.main.luminance > 0.5
        ? this.error.main.clone().darken(90).rename("on_error")
        : this.error.main.clone().lighten(90).rename("on_error");
  }

  public getColors() {
    return Object.assign(
      this.primary.toObject(),
      this.secondary?.toObject(),
      this.background?.toObject(),
      this.surface?.toObject(),
      this.error?.toObject()
    );
  }
}
