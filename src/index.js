import express from 'express';
import 'dotenv/config';

import homeRoute from './routes/home.js';

const app = express();
const SERVER_PORT = 8091;

app.use(homeRoute);

app.listen(SERVER_PORT, () => {
  console.log(`Server run in http://localhost:${SERVER_PORT}`);
});
