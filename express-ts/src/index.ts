import { auth } from "./lib/auth";
import express, { NextFunction, Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import logger from "./utils/logger";
import cors from "cors";
import routes from "./route/route"
import dotenv from "dotenv";

console.log("NODE ENV:", process.env.NODE_ENV);

dotenv.config({
  path: process.env.NODE_ENV === "development" ? ".env.development" : ".env.production",
});

const app = express();
const port = process.env.EXPRESS_PORT || 3000;
const allowedOrigins = process.env.EXPRESS_ALLOWED_ORIGINS?.split(",") || [];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.all("/api/auth/*", toNodeHandler(auth));
app.use("/", routes)

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


