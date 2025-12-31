import "reflect-metadata";
import express from "express";
import { connectDB } from "./database/connection.js";
import AuthRouter from "./routers/auth.router.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the PrimeTimer API");
});

app.use(errorMiddleware);
connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  )
  .catch((error) => {
    console.error("Failed to start server:", error);
  });
