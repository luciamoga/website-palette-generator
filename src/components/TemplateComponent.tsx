import { Harmony } from "../types/Harmonies/Harmony";
import AlbumLayoutComponent from "./SampleTemplates/AlbumLayoutComponent";
import PricingCompoenent from "./SampleTemplates/Pricing";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

interface TemplateComponentProps {
  harmony: Harmony;
}

const TemplateComponent = ({ harmony }: TemplateComponentProps) => {
  let themeSet = {
    palette: {
      primary: {
        main: harmony.primary.main.hex,
        dark: harmony.primary.variant?.hex,
        contrastText: harmony.primary.text?.hex,
      },
      secondary: {
        main: harmony.secondary.main.hex,
        dark: harmony.secondary.variant?.hex,
        contrastText: harmony.secondary.text?.hex,
      },
      background: {
        default: harmony.background.main.hex,
        paper: harmony.surface.main.hex,
        surface: harmony.surface.main.hex,
      },
      error: { main: harmony.error.main.hex },
      text: {
        primary: harmony.primary.text?.hex ? harmony.primary.text?.hex : "#000",
        background: harmony.background.text?.hex,
        surface: harmony.surface.text?.hex,
        secondary: harmony.secondary.text?.hex
          ? harmony.secondary.text?.hex
          : "#000",
      },
    },
  };
  const theme = createTheme(themeSet);

  return (
    <div className="templates">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="album">
          <AlbumLayoutComponent />
        </div>
        <Box className="pricing">
          <PricingCompoenent />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default TemplateComponent;
