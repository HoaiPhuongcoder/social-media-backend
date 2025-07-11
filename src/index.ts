import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './routers/users.routes';
import databaseService from './services/database.services';
const app = express();
const port = 3000;

app.use(express.json());

databaseService.connect().catch(console.dir);

app.use('/users', usersRouter);
app.use((error: any, req: Request, res: Response, _next: NextFunction) => {
  res.status(400).json({
    error: error.message
  });
});
app.listen(port, () => {
  console.log(port);
});
