import express from 'express';
import 'dotenv/config';

import homeRoute from './routes/home.js';

const app = express();

app.use(homeRoute);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server run in http://localhost:${process.env.SERVER_PORT}`);
});
