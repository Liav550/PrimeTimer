import type { NextFunction, Request, Response } from "express";
import { createSolve, getSolves } from "../services/solves.service.js";
import { StatusCodes } from "http-status-codes";

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

export const createSolveHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newSolve = await createSolve(req.body);

    return res.status(StatusCodes.CREATED).json(newSolve);
  } catch (error) {
    next(error);
  }
};
