import express, { NextFunction, Request, Response } from "express";
import rateLimit from 'express-rate-limit'

// import order from "./order/_order.route.js";
// import user from "./user/_user.route.js";
// import refreshToken from "./auth/refresh-token/refresh.controller.js";
// import login from "./auth/login/login.controller.js";
// import logout from "./auth/logout/logout.controller.js";
// import blog from "./blog/_blog.route.js";
// import blogcat from "./blog-category/_blog-category.route.js";
// import career from "./career/_career.route.js";
// import position from "./position/_position.route.js";
// import subscription from "./subscription/_subscription.route.js";
// import page from "./page/_page.route.js";
// import category from "./service-category/_service-category.route.js";
// import plan from "./service-plan/_service-plan.route.js";
// import meta from "./meta/_meta.route.js"
// import forgot from "./auth/forgot-password/forgot-password.controller.js"
// import reset_password from "./auth/reset-password/reset-password.controller.js"
import logger from "../utils/logger";

// Middleware
// import verifyToken from "../middleware/verify.token.js";

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

const router = express.Router();
router.use("/v1/page", (req, res, next) => {
    res.send("Hello from Express + TypeScript!");
});

//Auth Routes
// router.use("/auth/refresh-token", refreshToken);
// router.use("/auth/login",limiter, login);
// router.use("/auth/logout",limiter, logout);
// router.use("/auth/forgot-password", limiter, forgot);
// router.use("/auth/reset-password", limiter, reset_password);

// // API Routes
// router.use("/v1/page", page.endUser);
// router.use("/v1/meta", meta.endUser);
// router.use("/v1/blog", blog.endUser);
// router.use("/v1/career", career.endUser);
// router.use("/v1/position", position.endUser);
// router.use("/v1/blog-category", blogcat.endUser);
// router.use("/v1/subscription", subscription.endUser);
// router.use("/v1/service-category", category.endUser);
// router.use("/v1/user", user.endUser);
// router.use("/v1/plan", plan.endUser);
// router.use("/v1/order", order.endUser);

// // Back Office
// router.use("/v1/back-office", (req, res, next) => {
//   const backOfficeRouter = express.Router();
//   backOfficeRouter.use("/blog", blog.backOffice);
//   backOfficeRouter.use("/user", user.backOffice);
//   backOfficeRouter.use("/meta", meta.backOffice);
//   backOfficeRouter.use("/page", page.backOffice);
//   backOfficeRouter.use("/career", career.backOffice);
//   backOfficeRouter.use("/position", position.backOffice);
//   backOfficeRouter.use("/blog-category", blogcat.backOffice);
//   backOfficeRouter.use("/subscription", subscription.backOffice);
//   backOfficeRouter.use("/service-category", category.backOffice);
//   backOfficeRouter.use("/plan", plan.backOffice);
//   backOfficeRouter.use("/order", order.backOffice);
//   backOfficeRouter(req, res, next);
// });

export default router;
