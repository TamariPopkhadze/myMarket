import express from "express";
import authRouter from "./authrouter.js";
import CheckAuthMiddleware from "../middlewares/checkAuthMidlleware.js";
import { getUsers } from "../controlers/authcontroler.js";
import productRouter from "./productsrouter.js";
import producttypeRouter from "./producttyperouter.js";

const router = express.Router();
router.use("/auth", authRouter);

// router.use(CheckAuthMiddleware);
router.get('/allUsers',getUsers)

router.use("/product",productRouter);
router.use("/productType",producttypeRouter);

export default router;
