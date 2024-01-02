import "react-toastify/dist/ReactToastify.css";

import "../style/Palette.css";
import { Container } from "@mui/material";
import ColorClusterCardsComponent from "./ColorClusterCardsComponent";
import { Harmony } from "../types/Harmonies/Harmony";

interface PaletteProps {
  harmony: Harmony;
}

const PaletteComponent = ({ harmony }: PaletteProps) => {
  return (
    <div className="Palette">
      {/* map all Palette keys */}

      <Container sx={{ py: 8 }} className="colors" maxWidth="md">
        {/* End hero unit */}

        <ColorClusterCardsComponent
          colorCluster={harmony.primary}
          name="Primary"
        />
        <ColorClusterCardsComponent
          colorCluster={harmony.secondary}
          name="Secondary"
        />
        <ColorClusterCardsComponent
          colorCluster={harmony.background}
          name="Background"
        />
        <ColorClusterCardsComponent
          colorCluster={harmony.surface}
          name="Surface"
        />
        <ColorClusterCardsComponent colorCluster={harmony.error} name="Error" />
      </Container>
    </div>
  );
};

export default PaletteComponent;
