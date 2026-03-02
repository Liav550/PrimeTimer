import type { NextFunction, Request, Response } from "express";
import { getUserSessions } from "../services/sessions.service.js";

const getUserSessionsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allSessions = await getUserSessions(req.cookies.token);

    return res.json(allSessions);
  } catch (error) {
    next(error);
  }
};

export { getUserSessionsHandler };
