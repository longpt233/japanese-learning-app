import express from 'express';
import 'dotenv/config';
import mongoDBConnect from './config/db.js';
import authRoutes from './routes/auth.routes.js';
const app = express();

app.use(express.json());
app.use(authRoutes);
const PORT = process.env.SERVER_PORT || 8091;

app.listen(PORT, () => {
  console.log(`Server run in http://localhost:${PORT}`);
  mongoDBConnect();
});
