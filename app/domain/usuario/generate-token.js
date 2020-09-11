const jwt = require("jsonwebtoken");

/**
 * @function generateToken gerar novo token
 * @param params parametros para assinar o token
 *
 * @returns token assinado
 */
module.exports = (...params) => {
    const claims = params.map((param) => [param]);
    return jwt.sign(claims);
};
