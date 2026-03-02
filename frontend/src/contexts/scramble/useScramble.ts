import { useContext } from "react";
import { ScrambleContext } from "./scrambleContext";

export const useScramble = () => {
  const value = useContext(ScrambleContext);

  if (!value) {
    throw new Error("Context must be called within a provider");
  }

  return value;
};
