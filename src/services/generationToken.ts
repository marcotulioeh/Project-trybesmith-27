import { sign, SignOptions } from 'jsonwebtoken';

const generationToken = (username: string) => {
  const jwtConfig: SignOptions = { expiresIn: '1d', algorithm: 'HS256' };
  const token = sign({ username }, 'algo_super_secreto', jwtConfig);

  return token;
};

export default generationToken;