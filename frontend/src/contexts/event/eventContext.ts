import { createContext } from "react";
import type { EventType } from "../../utils/types";

interface EventContextType {
  event: EventType;
  setEvent: (event: EventType) => void;
}

export const EventContext = createContext<EventContextType>({
  event: "333",
  setEvent: () => {},
});
