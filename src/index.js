import express from 'express';
import cors from 'cors';
import { router } from './routes/public-api.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
app.listen(PORT, () => {
  console.log('servere jalan lik');
});
