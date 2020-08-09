const environments = require("../../domain/helpers/environments");

module.exports = function (err, req, res, next) {
    const error = {
        error: `${err.message || "internal error"}`,
        sentryId: res.sentry
    };

    if (process.env.NODE_ENV !== environments.PRODUCTION) {
        console.error(err.stack);
        error.stack = err.stack;
    }

    res.status(err.status || 500)
        .json(error)
};
