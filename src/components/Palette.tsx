//react component that contains a custom number of colors color palette, their names, and their hex codes
//this component is used in the PaletteList component

import { Color } from "../types/Color";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../style/Palette.css";
import { Palette } from "../types/Palette";
import { Container } from "@mui/material";
import ColorClusterCardsComponent from "./ColorClusterCardsComponent";

interface PaletteProps {
  palette: Palette;
}

const PaletteComponent = ({ palette }: PaletteProps) => {
  const handleCopy = (color: Color) => {
    toast.info(`Copied ${color.hex}`);
  };

  return (
    <div className="Palette">
      {/* map all Palette keys */}

      <Container sx={{ py: 8 }} className="colors" maxWidth="md">
        {/* End hero unit */}

        <ColorClusterCardsComponent
          colorCluster={palette.primary}
          onCopy={handleCopy}
        />
        <ColorClusterCardsComponent
          colorCluster={palette.secondary}
          onCopy={handleCopy}
        />
        <ColorClusterCardsComponent
          colorCluster={palette.background}
          onCopy={handleCopy}
        />
        <ColorClusterCardsComponent
          colorCluster={palette.surface}
          onCopy={handleCopy}
        />
        <ColorClusterCardsComponent
          colorCluster={palette.error}
          onCopy={handleCopy}
        />
      </Container>
    </div>
  );
};

export default PaletteComponent;
