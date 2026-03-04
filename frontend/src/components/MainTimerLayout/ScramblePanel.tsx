import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEvent } from "../../contexts/event/useEvent";
import { useTimer } from "../../contexts/timer/useTimer";
import { useEffect } from "react";

export const ScramblePanel = () => {
  const { event, setEvent } = useEvent();
  const { scramble, generateRandomScramble } = useTimer();

  useEffect(() => {
    generateRandomScramble(event);
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box
        sx={{
          paddingTop: "1rem",
          paddingLeft: "0.5rem",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <FormControl sx={{ width: "10rem" }}>
          <InputLabel id="demo-simple-select-label">Event</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={event}
            label="Event"
            onChange={(event) => {
              setEvent(event.target.value);
              generateRandomScramble(event.target.value);
            }}
          >
            <MenuItem value={"333"}>3x3</MenuItem>
            <MenuItem value={"222"}>2x2</MenuItem>
            <MenuItem value={"pyram"}>Pyraminx</MenuItem>
            <MenuItem value={"skewb"}>Skewb</MenuItem>
            <MenuItem value={"sq1"}>Square-1</MenuItem>
          </Select>
        </FormControl>
        <span
          style={{ fontSize: "3rem" }}
          className={`cubing-icon event-${event}`}
        ></span>
      </Box>
      <Box
        sx={{
          padding: "1rem",
          fontSize: "2rem",
          justifyContent: "center",
          fontWeight: 600,
          display: "flex",
          gap: 5,
        }}
      >
        {scramble}
      </Box>
    </Box>
  );
};
