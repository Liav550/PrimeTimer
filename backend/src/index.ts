import "reflect-metadata";
import express from "express";
import { connectDB } from "./database/connection.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  )
  .catch((error) => {
    console.error("Failed to start server:", error);
  });
