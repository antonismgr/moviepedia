import React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons({
  action,
  title,
  color,
  startIcon,
  variant,
  size,
}) {
  return (
    <Button
      variant={variant}
      onClick={action}
      color={color}
      startIcon={startIcon}
      size={size}
    >
      {title}
    </Button>
  );
}
