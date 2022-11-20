import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import { route } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/commentary', route);

app.use(errorMiddleware);

export default app;
