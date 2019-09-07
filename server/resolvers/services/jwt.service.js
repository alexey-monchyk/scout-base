import jwt from 'jsonwebtoken';

export const generateJWT = (id) => {
  const token = jwt.sign({ id }, process.env.ACCESS_SECRET, {
    expiresIn: '5h',
  });

  return token;
}

export const verifyJWT = (token) => {
  return jwt.verify(token, process.env.ACCESS_SECRET);
}