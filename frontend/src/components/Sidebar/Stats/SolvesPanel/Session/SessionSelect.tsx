import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export const SessionSelect = () => {
  const [currentSession, setCurrentSession] = useState<string>("");

  return (
    <FormControl sx={{ width: "10rem", height: "fit-content" }}>
      <InputLabel>Session</InputLabel>
      <Select
        value={currentSession}
        label="Session"
        onChange={(event) => setCurrentSession(event.target.value)}
      >
        <MenuItem value={"session1"}>session1</MenuItem>
        <MenuItem value={"session2"}>session2</MenuItem>
        <MenuItem value={"session3"}>session3</MenuItem>
      </Select>
    </FormControl>
  );
};
