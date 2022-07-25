const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const generateToken = ({ payload }) => {
    const token = jwt.sign(
      { payload },
      SECRET,
      jwtConfig,
    );
    
    return token;
};

module.exports = { generateToken };