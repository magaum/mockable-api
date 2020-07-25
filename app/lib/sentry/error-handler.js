const Sentry = require("@sentry/node");

/** 
 * @function errorHandler Sentry error handler
 * @description Should be add after any error handler
 * 
*/
module.exports = Sentry.Handlers.errorHandler;
