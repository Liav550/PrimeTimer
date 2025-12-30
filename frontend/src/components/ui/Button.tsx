import type { Theme } from "@emotion/react";
import { Button, type SxProps } from "@mui/material";
import type { FC } from "react";
import { colorPallete } from "../../utils/constants";

interface StyledButtonProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  type?: "button" | "submit" | "reset";
}

export const StyledButton: FC<StyledButtonProps> = ({ children, sx, type }) => {
  return (
    <Button
      type={type}
      sx={{
        backgroundColor: type === "submit" ? colorPallete.bold : "inherit",
        color: "white",
        paddingX: "2rem",
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};
