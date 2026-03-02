import { AppDataSource } from "../database/connection.js";
import { Session } from "../entities/session.entity.js";
import { decode } from "jsonwebtoken";
const sessionsRepository = AppDataSource.getRepository(Session);

export const getUserSessions = async (token: string) => {
  const data = decode(token) as { userId: string };
  const userId = data.userId;

  const allSessions = await sessionsRepository.find({
    where: { userId },
    relations: { solves: true },
  });

  return allSessions;
};
