import type { Request, Response, NextFunction } from "express";
import { login, signUp } from "../services/auth.service.js";
import { StatusCodes } from "http-status-codes";

const loginHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);

    return res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    next(error);
  }
};

const signUpHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, username } = req.body;
    const user = await signUp(email, password, username);

    return res.status(StatusCodes.CREATED).json({ user });
  } catch (error) {
    next(error);
  }
};

export { loginHandler, signUpHandler };
