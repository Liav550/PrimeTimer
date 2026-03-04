import "reflect-metadata";
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./database/connection.js";
import AuthRouter from "./routers/auth.router.js";
import SessionsRouter from "./routers/sessions.router.js";
import SolvesRouter from "./routers/solves.router.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/auth", AuthRouter);
app.use("/sessions", SessionsRouter);
app.use("/solves", SolvesRouter);
app.use(errorMiddleware);

connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    }),
  )
  .catch((error) => {
    console.error("Failed to start server:", error);
  });
