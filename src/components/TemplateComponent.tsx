//This is a template component that contains multiple templates from Material UI.

import { Palette } from "../types/Palette";
import AlbumLayoutComponent from "./SampleTemplates/AlbumLayoutComponent";
import PricingCompoenent from "./SampleTemplates/Pricing";
import { ThemeProvider, createTheme } from "@mui/material";

interface TemplateComponentProps {
  palette: Palette;
}

const TemplateComponent = ({ palette }: TemplateComponentProps) => {
  let themeSet = {
    palette: {
      primary: {
        main: palette.primary.main.hex,
        dark: palette.primary.variant?.hex,
        contrastText: palette.primary.text?.hex,
      },
      secondary: {
        main: palette.secondary.main.hex,
        dark: palette.secondary.variant?.hex,
        contrastText: palette.secondary.text?.hex,
      },
      background: {
        default: palette.background.main.hex,
        paper: palette.surface.main.hex,
        surface: palette.surface.main.hex,
      },
      error: { main: palette.error.main.hex },

      // warning: { main: palette.error.main.hex },
      // info: { main: palette.error.main.hex },
      // success: { main: palette.error.main.hex },

      text: {
        primary: palette.primary.text?.hex ? palette.primary.text?.hex : "#000",
        background: palette.background.text?.hex,
        surface: palette.surface.text?.hex,
        secondary: palette.secondary.text?.hex
          ? palette.secondary.text?.hex
          : "#000",
      },
    },
  };
  const theme = createTheme(themeSet);

  return (
    <div className="templates">
      <ThemeProvider theme={theme}>
        <div className="album">
          <AlbumLayoutComponent />
        </div>
        <div className="pricing">
          <PricingCompoenent />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default TemplateComponent;
