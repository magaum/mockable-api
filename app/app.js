const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const router = require("./web/router");

app.use(logger("dev"));
router(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(express.json())

module.exports = app;
