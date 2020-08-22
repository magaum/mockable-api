const router = require("express").Router();
const findAll = require("./find-all");
const create = require("./create");

router.get("", findAll);
router.post("", create);

module.exports = router;
