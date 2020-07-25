const router = require("express").Router();
const findAll = require("./find-all");

router.get("", findAll);

module.exports = router;
