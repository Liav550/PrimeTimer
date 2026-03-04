import { createContext } from "react";
import type { EventType } from "../../utils/types";

interface TimerContextType {
  scramble: string;
  generateRandomScramble: (event: EventType) => void;
  currentSession: string | null;
  setCurrentSession: (id: string) => void;
}

export const TimerContext = createContext<TimerContextType>({
  scramble: "",
  generateRandomScramble: () => {},
  currentSession: null,
  setCurrentSession: () => {},
});
