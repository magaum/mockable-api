//https://github.com/Surnet/swagger-jsdoc/blob/master/example/v2/app.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerDefinition = require("./config");
const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");

const options = {
    swaggerDefinition,
    apis: ["./app/web/v1/**/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);

router.use("/api-docs.json", ({ res }) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
});
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
