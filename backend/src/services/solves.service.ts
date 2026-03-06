import { AppDataSource } from "../database/connection.js";
import { Solve } from "../entities/solve.entity.js";
import type { CreatedSolve } from "../utils/types.js";

const solvesRepository = AppDataSource.getRepository(Solve);

export const getSolves = async (sessionId: string) => {
  const allSolves = await solvesRepository.find({
    where: { session: { id: sessionId } },
    order: { createdAt: "DESC" },
  });

  return allSolves;
};

// The solve here will not have the default values, so we need to use Partial<Solve>
export const createSolve = async (solve: CreatedSolve) => {
  const { finalTime, scramble, sessionId, eventName } = solve;
  const newSolve = solvesRepository.create({
    finalTime,
    scramble,
    sessionId,
    eventName,
  });

  await solvesRepository.save(newSolve);

  return newSolve;
};
