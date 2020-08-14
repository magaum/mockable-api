const { isEmpty } = require("lodash");

/**
 * @function throwIfEmpty lança exceção caso o valor informado seja vazio
 * @param {any} value valor para ser processado
 * @param {string} message mensagem de erro caso {value} seja vazio
 */
module.exports = (value, message = "Argmento não pode ser vazio") => {
    if (!isEmpty(value)) {
        return;
    } else {
        throw new Error(message);
    }
}
