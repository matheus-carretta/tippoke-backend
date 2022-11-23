import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import { route } from './routes';

const app = express();
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  app.use(cors());
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/commentary', route);

app.use(errorMiddleware);

export default app;
