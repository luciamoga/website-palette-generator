//Simple Contact Component

import React from "react";
import { Typography } from "@mui/material";

interface ContactComponentProps {}

const ContactComponent = ({}: ContactComponentProps) => {
  return (
    <React.Fragment>
      <div>
        <Typography variant="h1">Contact</Typography>
      </div>
    </React.Fragment>
  );
};

export default ContactComponent;
