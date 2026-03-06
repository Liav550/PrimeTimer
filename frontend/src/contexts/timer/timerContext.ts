import { createContext } from "react";
import type { EventType } from "../../utils/types";

interface TimerContextType {
  // Scramble management
  scramble: string;
  generateRandomScramble: (event: EventType) => void;
  // Session management
  currentSession: string | null;
  setCurrentSession: (id: string) => void;
  // Timer management
  toggleTimer: () => void;
  isTiming: boolean;
  currentTime: number;
}

export const TimerContext = createContext<TimerContextType>({
  scramble: "",
  generateRandomScramble: () => {},
  currentSession: null,
  setCurrentSession: () => {},
  toggleTimer: () => {},
  isTiming: false,
  currentTime: 0,
});
