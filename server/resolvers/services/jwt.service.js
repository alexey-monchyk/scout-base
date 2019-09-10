const jwt = require('jsonwebtoken');

exports.generateJWT = (id) => {
  const token = jwt.sign({ id }, process.env.ACCESS_SECRET, {
    expiresIn: '5h',
  });

  return token;
}

exports.verifyJWT = (token) => {
  return jwt.verify(token, process.env.ACCESS_SECRET);
}