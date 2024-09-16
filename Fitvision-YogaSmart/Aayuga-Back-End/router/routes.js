import { Router } from "express";
import ChatBotRouter from './chatBot.js';
import LoginRouter from './login.js';
import QuestionRouter from './pose.js';
import SignupRouter from './signup.js';
import UserRoter from './user.js';
const router = new Router();

router.use(SignupRouter);
router.use(LoginRouter);
router.use(UserRoter);
router.use(ChatBotRouter);
router.use(QuestionRouter);

export default router;