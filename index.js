import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import { tweetsRouter } from './routers/tweets-router.js';
import { usersRouter } from './routers/user-router.js';

const app = express();

app.use(cors());
app.use(json());
app.use(usersRouter)
app.use(tweetsRouter)

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
