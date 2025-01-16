import bcrypt from 'bcryptjs';

export interface User {
  email: string;
  password: string;
}

// Função para hash da senha
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Função para comparar senhas
export const comparePassword = async (inputPassword: string, storedPassword: string): Promise<boolean> => {
  return bcrypt.compare(inputPassword, storedPassword);
};