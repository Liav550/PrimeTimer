import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Session } from "./session.entity.js";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true, type: "varchar" })
  email!: string;

  @Column({ type: "varchar" })
  username!: string;

  @Column({ type: "varchar" })
  password!: string;

  @OneToMany(() => Session, (session) => session.user)
  sessions!: Session[];
}
