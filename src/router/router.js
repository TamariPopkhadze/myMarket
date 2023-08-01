import express from "express";
import authRouter from "./authrouter.js";
import CheckAuthMiddleware from "../middlewares/checkAuthMidlleware.js";
import { getUsers } from "../controlers/authcontroler.js";
import productRouter from "./productsrouter.js";
import producttypeRouter from "./producttyperouter.js";
import buyRouter from "./buyRouter.js";
import getTransactionRouter from "./getTransaction.js";
import { getStatistic } from "../controlers/getstatistic.js";

const router = express.Router();
router.use("/auth", authRouter);

router.use(CheckAuthMiddleware);
router.get('/allUsers',getUsers)

router.use("/product",productRouter);
router.use("/productType",producttypeRouter);
router.use('/buy',buyRouter);
router.use('/transactions', getTransactionRouter)
router.use('/getstatistic' , getStatistic)
export default router;
