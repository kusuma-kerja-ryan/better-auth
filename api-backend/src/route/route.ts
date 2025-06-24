import express from "express";
import limiter from "../config/limiter";

const router = express.Router();
router.use("/page", limiter, (req, res, next) => {
  res.send("Hello from Express + TypeScript!");
});

// // Back Office
// router.use("/end-user", (req, res, next) => {
//   const endUser = express.Router();
//   endUser.use("/blog", blog.endUser);
//   endUser(req, res, next);
// });

// // Back Office
// router.use("/back-office", (req, res, next) => {
//   const backOfficeRouter = express.Router();
//   backOfficeRouter.use("/blog", blog.backOffice);
//   backOfficeRouter(req, res, next);
// });

export default router;
