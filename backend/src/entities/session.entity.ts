import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { User } from "./user.entity.js";
import { Solve } from "./solve.entity.js";

@Entity("sessions")
export class Session {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", name: "user_id" })
  userId!: string;

  @ManyToOne(() => User, (user) => user.sessions)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @OneToMany(() => Solve, (solve) => solve.session)
  solves!: Solve[];
}
