const router = require("express").Router();
const findAll = require("./find-all");
const create = require("./create");
const authenticate = require("./authenticate");

router.get("", findAll);
router.post("", create);
router.post("/authenticate", authenticate);

module.exports = router;
