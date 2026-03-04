import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { useGetRequest } from "../../../../../hooks/useGetRequest";
import type { Session } from "../../../../../utils/types";
import { useTimer } from "../../../../../contexts/timer/useTimer";
import { CiCirclePlus } from "react-icons/ci";
import { useEffect } from "react";
import { DeleteSectionModal } from "./DeleteSectionModal";

export const SessionSection = () => {
  const { data: sessions, isLoading, refetch } = useGetRequest("/sessions/");
  const { currentSession, setCurrentSession } = useTimer();

  useEffect(() => {
    if (sessions && sessions.length > 0 && !currentSession) {
      setCurrentSession(sessions[0].id);
    }
  }, [setCurrentSession, sessions, currentSession]);

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentSession(event.target.value);
  };

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <FormControl sx={{ width: "10rem" }}>
        <InputLabel id="session-select-label">Session</InputLabel>

        <Select
          labelId="session-select-label"
          value={currentSession ?? ""}
          label="Session"
          onChange={handleChange}
        >
          {sessions?.map((session: Session) => (
            <MenuItem key={session.id} value={session.id}>
              {session.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Tooltip title="new session">
          <Button>
            <CiCirclePlus style={{ fontSize: "2.5rem", color: "black" }} />
          </Button>
        </Tooltip>
      </Box>
      <Box>
        <DeleteSectionModal refetch={refetch} />
      </Box>
    </Box>
  );
};
