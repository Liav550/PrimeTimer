export type EventType =
  | "222"
  | "333"
  | "444"
  | "555"
  | "666"
  | "777"
  | "clock"
  | "minx"
  | "pyram"
  | "skewb"
  | "sq1";

export interface Session {
  id: string;
  name: string;
}

export interface Solve {
  id: string;
  finalTime: string;
  ao5?: string;
  ao12?: string;
}
