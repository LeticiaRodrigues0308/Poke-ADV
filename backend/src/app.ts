import express, { Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './routes/route';

const app = express();
app.use(cors());
app.use(express.json());

//Rotas
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});