const logger = require("debug");
const log = logger("mockable:log");

exports.middlewareLogger = logger("mockable:requests");
exports.logger = log;
exports.error = (message, color = 'red', logger = log) => {
    logger(message, color)
}
