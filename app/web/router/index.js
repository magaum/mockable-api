const router = require("express").Router();
const apiRoutes = require("./routes");
const swaggerDocs = require("../../lib/swagger");
const healthCheck = require("../../lib/health-check");
const notFoundHandler = require("./not-found-handler");
const exceptionHandler = require("./exception-handler");
const { errorHandler, requestHandler } = require("../../lib/sentry");

module.exports = ((app) => {
    app.use(router);
    app.use(requestHandler());
    app.use("/api/v1", apiRoutes);
    app.use(swaggerDocs);
    app.use(healthCheck)
    app.use(notFoundHandler);
    app.use(errorHandler());
    app.use(exceptionHandler);
});
