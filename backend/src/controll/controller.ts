import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from '../models/user';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Função de login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  // Verificar se o usuário existe (banco de dados fictício)
  const user = { email: 'test@example.com', password: 'hashedPassword' }; // Substituir por DB real

if (user && await comparePassword(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  } else {
    return res.status(400).json({ error: 'Invalid credentials' });
  }
};

// Função de registro
export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  
  // Salvar no banco de dados (fictício)
  const user = { email, password: hashedPassword };
  
  return res.status(201).json({ message: 'User registered', user });
};