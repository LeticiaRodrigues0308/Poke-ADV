import { Request, Response } from 'express';
import { hashPassword } from '../models/user';

// Função de login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  // Verificar se o usuário existe 
  const user = { email: 'le@example.com', password: '12345' }; // Substituir por DB real
}

// Registro
export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  
  // Salvar no banco de dados 
  const user = { email, password: hashedPassword };
  
  return res.status(201).json({ message: 'User registered', user });
};