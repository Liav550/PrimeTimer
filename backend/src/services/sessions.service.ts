import { AppDataSource } from "../database/connection.js";
import { Session } from "../entities/session.entity.js";
import { decode } from "jsonwebtoken";
import { AppError } from "../errors/appError.js";
import { StatusCodes } from "http-status-codes";
const sessionsRepository = AppDataSource.getRepository(Session);

export const getUserSessions = async (token: string) => {
  const data = decode(token) as { userId: string };
  const userId = data.userId;

  const allSessions = await sessionsRepository.find({
    where: { userId },
  });

  return allSessions;
};

export const deleteSession = async (sessionId: string) => {
  const a = await sessionsRepository.delete({ id: sessionId });

  if (a.affected === 0) {
    throw new AppError(StatusCodes.NOT_FOUND, "Session not found");
  }
};
