import { useTimer } from "../contexts/timer/useTimer";
import { useGetRequest } from "./useGetRequest";

export const useSolves = () => {
  const { currentSession } = useTimer();

  return useGetRequest(`/solves/${currentSession}`);
};
