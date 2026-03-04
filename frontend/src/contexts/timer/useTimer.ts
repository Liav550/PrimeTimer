import { useContext } from "react";
import { TimerContext } from "./timerContext";

export const useTimer = () => {
  const value = useContext(TimerContext);

  if (!value) {
    throw new Error("Context must be called within a provider");
  }

  return value;
};
