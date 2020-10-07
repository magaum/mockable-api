const jwt = require("jsonwebtoken");

module.exports = (claims) => {
    return jwt.sign(claims, process.env.JWT_SECRET);
};
