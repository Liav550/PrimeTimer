import { useState, type ReactNode } from "react";
import Scrambo from "scrambo";
import { ScrambleContext } from "./scrambleContext";
import type { EventType } from "../../utils/types";

interface ScrambleProviderProps {
  children: ReactNode;
}

export const ScrambleProvider = ({ children }: ScrambleProviderProps) => {
  const [scramble, setScramble] = useState<string>("");

  const generateRandomScramble = (event: EventType) => {
    if (event === "222") {
      setScramble(new Scrambo().type(event).length(10).get()[0]);
      return;
    }
    setScramble(new Scrambo().type(event).get()[0]);
  };

  const value = { scramble, generateRandomScramble };

  return (
    <ScrambleContext.Provider value={value}>
      {children}
    </ScrambleContext.Provider>
  );
};
