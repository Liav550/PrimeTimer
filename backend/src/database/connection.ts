import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/user.entity.js";
import { Session } from "../entities/session.entity.js";
import { Solve } from "../entities/solve.entity.js";

export const AppDataSource = new DataSource({
  type: "postgres", // Change to your DB type (mysql, sqlite, etc.)
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  schema: "timer",
  synchronize: false, // Set to false in production
  logging: false,
  entities: [User, Session, Solve],
});

export async function connectDB() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}
