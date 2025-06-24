import rateLimit from "express-rate-limit";
import logger from "../config/logger";
import { Request, Response, NextFunction } from "express";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again after 15 minutes",
    handler: (req : Request, res : Response, next : NextFunction) => {
      logger.error(`Rate limit exceeded for IP: ${req.ip} → ${req.originalUrl}`);
        res.status(429).json({
            error: "Too many requests, please try again after 15 minutes",
        });
    }
});

export default limiter