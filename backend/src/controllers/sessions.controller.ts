import type { NextFunction, Request, Response } from "express";
import {
  deleteSession,
  getUserSessions,
} from "../services/sessions.service.js";

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

export { getUserSessionsHandler, deleteSessionHandler };
