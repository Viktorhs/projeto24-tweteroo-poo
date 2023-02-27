import { Router } from "express";
import { userPost } from "../controllers/user-controller.js";

const usersRouter = Router();

usersRouter.post("/sign-up", userPost);

export { usersRouter };