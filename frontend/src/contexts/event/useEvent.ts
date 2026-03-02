import { useContext } from "react";
import { EventContext } from "./eventContext";

export const useEvent = () => {
  const value = useContext(EventContext);

  if (!value) {
    throw new Error("Context must be called within a provider");
  }

  return value;
};
