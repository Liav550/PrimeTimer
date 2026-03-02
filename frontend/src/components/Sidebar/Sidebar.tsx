import { Box } from "@mui/material";
import { Operations } from "./Operations/Operations";
import { Stats } from "./Stats/Stats";
import { Seperator } from "../ui/Seperator";

export const Sidebar = () => {
  return (
    <Box sx={{ width: "20%" }}>
      <Operations />
      <Seperator />
      <Stats />
    </Box>
  );
};
