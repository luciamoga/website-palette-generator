//Color Card Component that receives a ColorCluster object and renders a card for each color in the cluster.
//

import React from "react";
import { ColorCluster } from "../types/ColorCluster";

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
  name: string;
}

const ColorClusterCardsComponent = ({
  colorCluster,
  name,
}: ColorClusterCardsComponentProps) => {
  return (
    <React.Fragment>
      {/* main */}
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
          <Typography>{name}</Typography>
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
      {/* main text */}
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
            <Typography>{"On " + name}</Typography>
          </CardContent>
          ``
          <CardActions disableSpacing>
            <IconButton
              sx={{ color: colorCluster.main?.hex }}
              aria-label="copy"
              onClick={async () =>
                await navigator.clipboard.writeText(
                  colorCluster.text?.hex || ""
                )
              }
            >
              <CopyIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
      {/* variant */}
      {colorCluster.variant && (
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: colorCluster.variant.hex,
            color: colorCluster.variantText?.hex
              ? colorCluster.variantText.hex
              : "#000000",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {colorCluster.variant.hex}
            </Typography>
            <Typography>{name + " Variant"}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              sx={{ color: colorCluster.variantText?.hex }}
              aria-label="copy"
              onClick={async () =>
                await navigator.clipboard.writeText(
                  colorCluster.variant?.hex || ""
                )
              }
            >
              <CopyIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}

      {/* variant text */}
      {colorCluster.variantText && (
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: colorCluster.variantText.hex,
            color: colorCluster.variant?.hex,
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {colorCluster.variantText.hex}
            </Typography>
            <Typography>{"On " + name + " Variant"}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              sx={{ color: colorCluster.variant?.hex }}
              aria-label="copy"
              onClick={async () =>
                await navigator.clipboard.writeText(
                  colorCluster.variant?.hex || ""
                )
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

export default ColorClusterCardsComponent;
