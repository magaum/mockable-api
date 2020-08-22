const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("./data");
const logger = require("morgan");
const { middlewareLogger } = require("./lib/logger");
const router = require("./web/router");

mongoose.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(express.json());
app.use(logger("dev"));
app.use((req, res, next) => {
    middlewareLogger(req.query);
    middlewareLogger(req.params);
    middlewareLogger(req.body);
    next();
});
router(app);

module.exports = app;
