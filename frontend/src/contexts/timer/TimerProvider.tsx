import { useState, useRef, type ReactNode, useCallback } from "react";
import Scrambo from "scrambo";
import { TimerContext } from "./timerContext";
import type { EventType } from "../../utils/types";

interface TimerProviderProps {
  children: ReactNode;
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [scramble, setScramble] = useState<string>("");
  const [currentSession, setCurrentSession] = useState<string>("");
  const [isTiming, setIsTiming] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const scramboRef = useRef(new Scrambo());

  // 🔁 Timer loop
  const updateTimer = useCallback(() => {
    if (startTimeRef.current !== null) {
      setCurrentTime(Date.now() - startTimeRef.current);
      // eslint-disable-next-line react-hooks/immutability
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }
  }, []);

  // ▶ Start
  const startInternal = () => {
    startTimeRef.current = Date.now();
    animationFrameRef.current = requestAnimationFrame(updateTimer);
  };

  // ⏹ Stop
  const stopInternal = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    startTimeRef.current = null;
  };

  // 🔄 Toggle (safe — no stale state)
  const toggleTimer = useCallback(() => {
    setIsTiming((prev) => {
      if (prev) {
        stopInternal();
      } else {
        startInternal();
      }
      return !prev;
    });
  }, [updateTimer]);

  // 🎲 Scramble
  const generateRandomScramble = (event: EventType) => {
    if (event === "222") {
      setScramble(scramboRef.current.type(event).length(10).get()[0]);
      return;
    }

    setScramble(scramboRef.current.type(event).get()[0]);
  };

  const value = {
    scramble,
    generateRandomScramble,
    currentSession,
    setCurrentSession,
    toggleTimer,
    currentTime,
    isTiming,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};
