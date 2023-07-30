import express from "express";
import authRouter from "./authrouter.js";
import CheckAuthMiddleware from "../middlewares/checkAuthMidlleware.js";

const router = express.Router();

router.use("/auth", authRouter);

router.use(CheckAuthMiddleware);
// router.use("/product");

export default router;
