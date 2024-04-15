import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',

  });
};

export default generateToken;