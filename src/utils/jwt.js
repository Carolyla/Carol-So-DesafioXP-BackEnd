const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const generateToken = ({ id, displayName, email, image }) => {
    const token = jwt.sign(
      { id, displayName, email, image },
      SECRET,
      jwtConfig,
    );
    
    return token;
};

module.exports = { generateToken };