import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Session } from "./session.entity.js";
import type { EventName, Penalty } from "../utils/types.js";

@Entity("solves")
export class Solve {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Session, (session) => session.solves)
  @JoinColumn({ name: "session_id" })
  session!: Session;

  @Column({ name: "event_name", type: "text" })
  eventName!: EventName;

  @Column({ name: "final_time", type: "text" })
  finalTime!: string;

  @Column({ nullable: true, type: "text" })
  penalty!: Penalty | null;

  @Column({ name: "created_at", type: "timestamp" })
  createdAt!: Date;
}
