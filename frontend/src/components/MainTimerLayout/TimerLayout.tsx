import { Box } from "@mui/material";
import { useTimer } from "../../contexts/timer/useTimer";
import { useEffect } from "react";
import { usePostRequest } from "../../hooks/usePostRequest";
import { useEvent } from "../../contexts/event/useEvent";
import { useSolves } from "../../hooks/useSolves";

export const TimerLayout = () => {
  const { currentTime, toggleTimer, isTiming } = useTimer();
  const { currentSession, scramble, generateRandomScramble } = useTimer();
  const { event } = useEvent();
  const { mutateAsync } = usePostRequest("/solves");
  const { refetch: refetchSolves } = useSolves();

  const convertToDisplayTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return minutes !== 0
      ? `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`
      : `${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        toggleTimer();
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [toggleTimer]);

  useEffect(() => {
    async function saveSolve() {
      if (!currentSession || !currentTime || !scramble) return;
      await mutateAsync({
        finalTime: convertToDisplayTime(currentTime),
        scramble: scramble,
        sessionId: currentSession,
        eventName: event,
      });

      generateRandomScramble(event);
      await refetchSolves();
    }

    if (!isTiming && currentTime !== 0) {
      saveSolve();
    }
  }, [isTiming]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
    >
      <Box sx={{ fontSize: "8rem", fontWeight: 800 }}>
        {convertToDisplayTime(currentTime)}
      </Box>
      <Box sx={{ fontSize: "2rem", fontWeight: 600 }}>ao5: 10.99</Box>
      <Box sx={{ fontSize: "2rem", fontWeight: 600 }}>ao12: 15.26</Box>
    </Box>
  );
};
