import { Box } from "@mui/material";
import type { FC } from "react";

interface MessageProps {
  text: string;
  type: "error" | "success";
}
export const Message: FC<MessageProps> = ({ text, type }) => {
  return (
    <Box
      component={"span"}
      sx={{ color: type === "error" ? "red" : "green", mt: "0.5rem" }}
    >
      {text}
    </Box>
  );
};
