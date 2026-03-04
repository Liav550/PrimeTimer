import { useState, type ReactNode } from "react";
import Scrambo from "scrambo";
import { TimerContext } from "./timerContext";
import type { EventType } from "../../utils/types";

interface TimerProviderProps {
  children: ReactNode;
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [scramble, setScramble] = useState<string>("");
  const [currentSession, setCurrentSession] = useState<string>("");

  const generateRandomScramble = (event: EventType) => {
    if (event === "222") {
      setScramble(new Scrambo().type(event).length(10).get()[0]);
      return;
    }
    setScramble(new Scrambo().type(event).get()[0]);
  };

  const value = {
    scramble,
    generateRandomScramble,
    currentSession,
    setCurrentSession,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};
