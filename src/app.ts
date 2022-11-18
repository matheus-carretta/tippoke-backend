import express from 'express';
import { route } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/commentary', route)

export default app;
