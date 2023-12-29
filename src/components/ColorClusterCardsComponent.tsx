//Color Card Component that receives a ColorCluster object and renders a card for each color in the cluster.
//

import React from "react";
import { ColorCluster } from "../types/ColorCluster";
import { Color } from "../types/Color";

import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import CopyIcon from "@mui/icons-material/ContentCopy";

interface ColorClusterCardsComponentProps {
  colorCluster: ColorCluster;
  onCopy: (color: Color) => void;
}

const ColorClusterCardsComponentProps = ({
  colorCluster,
}: ColorClusterCardsComponentProps) => {
  return (
    <React.Fragment>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: colorCluster.main.hex,
          color: colorCluster.text?.hex ? colorCluster.text.hex : "#000000",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {colorCluster.main.hex}
          </Typography>
          <Typography>{colorCluster.main.type}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            sx={{ color: colorCluster.text?.hex }}
            aria-label="copy"
            onClick={async () =>
              await navigator.clipboard.writeText(colorCluster.main.hex)
            }
          >
            <CopyIcon />
          </IconButton>
        </CardActions>
      </Card>
      {colorCluster.variant && (
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: colorCluster.variant.hex,
            color: colorCluster.text?.hex ? colorCluster.text.hex : "#000000",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {colorCluster.variant.hex}
            </Typography>
            <Typography>
              {colorCluster.variant.type.replace("_", " ")}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              sx={{ color: colorCluster.text?.hex }}
              aria-label="copy"
              onClick={async () =>
                await navigator.clipboard.writeText(colorCluster.main.hex)
              }
            >
              <CopyIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
      {/* if there is a colorCluster.text, show another card with the text color */}{" "}
      {colorCluster.text && (
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: colorCluster.text.hex,
            color: colorCluster.main.hex,
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {colorCluster.text.hex}
            </Typography>
            <Typography>{colorCluster.text.type.replace("_", " ")}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              sx={{ color: colorCluster.main?.hex }}
              aria-label="copy"
              onClick={async () =>
                await navigator.clipboard.writeText(colorCluster.main.hex)
              }
            >
              <CopyIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </React.Fragment>
  );
};

export default ColorClusterCardsComponentProps;
