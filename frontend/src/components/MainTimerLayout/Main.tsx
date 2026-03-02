import { Box } from "@mui/material";
import { ScramblePanel } from "./ScramblePanel";
import { Seperator } from "../ui/Seperator";
import { TimerLayout } from "./TimerLayout";

export const Main = () => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <ScramblePanel />
      <Seperator></Seperator>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TimerLayout />
      </Box>
    </Box>
  );
};
