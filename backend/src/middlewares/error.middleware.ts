import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError.js";
import { StatusCodes } from "http-status-codes";

export const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
    return;
  }

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: error.message || "Internal Server Error" });
};
