import express from 'express';
import authRouter from './auth.router';
import CheckAuthMiddleware from '../middlewares/checkAuthMidlleware';

const router = express.Router();

router.use("/auth",authRouter)

router.use(CheckAuthMiddleware)
router.use("/product")























export default router;
