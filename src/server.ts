import 'reflect-metadata';
import express from 'express';

import { router } from './routes';
import './database';
import './shared/container';

const app = express();
const PORT = 3333;

app.use(express.json());

app.use(router);

app.listen(PORT, () =>
  console.log(`Everthing ok! Server is running on port:${PORT}!`),
);
