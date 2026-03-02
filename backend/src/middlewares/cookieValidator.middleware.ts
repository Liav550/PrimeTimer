import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.cookies || !req.cookies.token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "Token not found");
    }

    const token = req.cookies.token;
    const isValid = jwt.verify(token, process.env.JWT_SECRET!);

    if (!isValid) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "Invalid Token");
    }
  } catch (error) {
    next(error);
  }

  next();
};

export default middleware;
