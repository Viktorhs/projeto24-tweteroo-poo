import { Router } from "express";
import tweetsController from "../controllers/tweets-controller";

const tweetsRouter = Router();

tweetsRouter.post('/tweets', tweetsController.create);
tweetsRouter.get('/tweets/:username',tweetsController.getByUser)
tweetsRouter.get('/tweets',tweetsController.getAll)

export { tweetsRouter };