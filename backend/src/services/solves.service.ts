import { AppDataSource } from "../database/connection.js";
import { Solve } from "../entities/solve.entity.js";

const solvesRepository = AppDataSource.getRepository(Solve);

export const getSolves = async (sessionId: string) => {
  const allSolves = await solvesRepository.find({
    where: { session: { id: sessionId } },
    order: { createdAt: "DESC" },
  });

  return allSolves;
};
