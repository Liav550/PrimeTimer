import type { Theme } from "@emotion/react";
import { Divider, type SxProps } from "@mui/material";
import type { FC } from "react";
import { colorPallete } from "../../utils/constants";

interface SeperatorProps {
  orientation?: "horizontal" | "vertical";
  sx?: SxProps<Theme> | undefined;
  flexItem?: boolean | undefined;
}

export const Seperator: FC<SeperatorProps> = ({
  orientation = "horizontal",
  sx,
  flexItem = false,
}) => {
  return (
    <Divider
      flexItem={flexItem}
      orientation={orientation}
      sx={{ ...sx, borderColor: colorPallete.seperatorColor, borderWidth: 1 }}
    ></Divider>
  );
};
