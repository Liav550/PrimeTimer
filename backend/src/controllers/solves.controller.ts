import type { NextFunction, Request, Response } from "express";
import { getSolves } from "../services/solves.service.js";

export const getSolvesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allSolves = await getSolves(req.params.sessionId!);

    res.json(allSolves);
  } catch (error) {
    next(error);
  }
};
