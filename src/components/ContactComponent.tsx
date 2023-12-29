//Simple Contact Component

import React from "react";
import { Box, Typography } from "@mui/material";

interface ContactComponentProps {}

const ContactComponent = ({}: ContactComponentProps) => {
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h1">Contact</Typography>
      </Box>
    </React.Fragment>
  );
};

export default ContactComponent;
