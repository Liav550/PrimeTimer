import { createContext } from "react";
import type { EventType } from "../../utils/types";

interface ScrambleContextType {
  scramble: string;
  generateRandomScramble: (event: EventType) => void;
}

export const ScrambleContext = createContext<ScrambleContextType>({
  scramble: "",
  generateRandomScramble: () => {},
});
