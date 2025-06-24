import { auth } from "./lib/auth";
import express, { NextFunction, Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import logger from "./config/logger";
import cors from "cors";
import routes from "./route/route"
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "development" ? ".env.development" : ".env.production",
});

const app = express();
const port = process.env.EXPRESS_PORT || 3000;
const allowedOrigins = process.env.EXPRESS_ALLOWED_ORIGINS?.split(",").map(origin => origin.trim()) || [];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info(`${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
  });
  next();
});

app.all("/api/auth/*", toNodeHandler(auth));
app.use("/api/v1", routes)

app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    logger.error(err.message);
  }
  next(err);
});

app.listen(port, () => {
  logger.info(`Server is running at PORT :${port}`);
});


