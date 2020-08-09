const usuarios = require("../v1/usuarios");
const router = require("express").Router()

router.use("/usuarios", usuarios);

module.exports = router;
