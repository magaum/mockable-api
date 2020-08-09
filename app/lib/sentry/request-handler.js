const Sentry = require("@sentry/node");

/**
 * @function requestHandler Sentry request handler
 * @description Should be add before all middlewares
 */
module.exports = Sentry.Handlers.requestHandler;
