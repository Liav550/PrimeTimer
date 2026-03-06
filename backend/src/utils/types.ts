export type EventName = "333" | "222" | "444" | "555";
export type Penalty = "+2" | "DNF";
export interface CreatedSolve {
  finalTime: string;
  scramble: string;
  sessionId: string;
  eventName: EventName;
}
