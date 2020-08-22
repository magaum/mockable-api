const bcrypt = require("bcryptjs");
const throwIfEmpty = require("../../domain/helpers/throwIfEmpty");

/**
 * @function matchPassword validar password do usuário
 * @param passowrd password que será validado
 * @param passowrdHashed password criptografado
 * 
 * @returns boolean com resultado do match
 */
module.exports = async (passowrd, passowrdHashed) => {
    throwIfEmpty(passowrd, "Password não pode ser vazio");
    throwIfEmpty(passowrdHashed, "PasswordHashed não pode ser vazio");
    return new Promise((resolve, reject) => {
        bcrypt.compare(passowrd, passowrdHashed, (err, match) => {
            if (err) {
                reject(err);
            }
            resolve(match);
        })
    });
}
