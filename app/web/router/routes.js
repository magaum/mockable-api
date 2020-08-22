const usuarios = require("../v1/usuarios");
const router = require("express").Router()

router.use("/v1/usuarios", usuarios);

module.exports = router;
