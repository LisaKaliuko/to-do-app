import React from "react";
import { Button } from "@mui/material";
import { Props } from "./types";

const PrimaryButton: React.FC<Props> = ({ children, size }): JSX.Element => {
  return (
    <Button variant="contained" size={size}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
