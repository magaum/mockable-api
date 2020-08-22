const bcrypt = require("bcryptjs");
const throwIfEmpty = require("../../domain/helpers/throwIfEmpty");

/**
 * @function encryptPassword criptografar password do usuário
 * @param passowrd password para ser criptografado
 *
 * @returns password criptografado
 */
module.exports = async (passowrd) => {
    throwIfEmpty(passowrd, "Password não pode ser vazio");
    return new Promise((resolve, reject) => {
        bcrypt.hash(passowrd, 10, (err, passowrdHashed) => {
            if (err) {
                reject(err);
            }

            resolve(passowrdHashed);
        });
    });
};
