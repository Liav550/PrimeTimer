import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { User } from "./user.entity.js";
import { Solve } from "./solve.entity.js";

@Entity("sessions")
export class Session {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, (user) => user.sessions)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @Column({ unique: true, type: "varchar" })
  name!: string;

  @Column({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @OneToMany(() => Solve, (solve) => solve.session)
  solves!: Solve[];
}
