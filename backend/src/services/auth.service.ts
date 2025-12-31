import { StatusCodes } from "http-status-codes";
import { AppDataSource } from "../database/connection.js";
import { User } from "../entities/user.entity.js";
import { AppError } from "../errors/appError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const usersRepository = AppDataSource.getRepository(User);

const login = async (email: string, password: string): Promise<string> => {
  const user = await usersRepository.findOneBy({ email });

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "User not found");
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError(StatusCodes.UNAUTHORIZED, "Invalid credentials");
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);

  return token;
};

const signUp = async (
  email: string,
  password: string,
  username: string
): Promise<User> => {
  const existingUser = await usersRepository.findOneBy({ email });

  if (existingUser) {
    throw new AppError(StatusCodes.CONFLICT, "User already exists");
  }

  const user = usersRepository.create({
    email,
    password: bcrypt.hashSync(password, 10),
    username,
  });
  await usersRepository.save(user);

  return user;
};

export { login, signUp };
