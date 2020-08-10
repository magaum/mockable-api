const environments = require("../../domain/helpers/environments");
const { logger } = require("../../lib/logger");

module.exports = function (err, req, res, next) {
    const error = {
        error: `${err.message || "internal error"}`,
        sentryId: res.sentry,
    };

    if (process.env.NODE_ENV !== environments.PRODUCTION) {
        logger(err.stack);
        error.stack = err.stack;
    }

    res.status(err.status || 500).json(error);
};
