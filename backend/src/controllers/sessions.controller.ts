import type { NextFunction, Request, Response } from "express";
import {
  createSession,
  deleteSession,
  getUserSessions,
} from "../services/sessions.service.js";
import { decode } from "jsonwebtoken";

const getUserSessionsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allSessions = await getUserSessions(
      req.headers.authorization?.split(" ")[1]!,
    );

    return res.json(allSessions);
  } catch (error) {
    next(error);
  }
};

const deleteSessionHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await deleteSession(req.params.id!);

    return res.json({ message: "Session deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const createSessionHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]!;
    const userId = token ? (decode(token) as { userId: string }).userId : null;

    const session = await createSession(userId!, req.body.name);

    return res.json(session);
  } catch (error) {
    next(error);
  }
};

export { getUserSessionsHandler, deleteSessionHandler, createSessionHandler };
