const router = require("express").Router();
const findAll = require("./find-all");
const findById = require("./find-by-id");
const create = require("./create");
const authenticate = require("./authenticate");

router.get("", findAll);
router.get("/:id", findById);
router.post("", create);
router.post("/authenticate", authenticate);

module.exports = router;
