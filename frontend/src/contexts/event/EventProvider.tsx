import { useState, type ReactNode } from "react";
import { EventContext } from "./eventContext";
import type { EventType } from "../../utils/types";

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
  const [event, setEvent] = useState<EventType>("333");

  const value = { event, setEvent };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};
