const Usuario = require("./")

module.exports = async ({ password, username, email }) => await new Usuario.schema({
    username,
    email,
    password: await Usuario.encryptPassword(password),
}).save()
