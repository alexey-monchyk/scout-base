const { verifyJWT } = require('./jwt.service');

exports.getUserId = ({ req }) => {
  const { authorization: token } = req.headers;

  if (!token) return null;

  const decoded = verifyJWT(token);

  return decoded.id;
};