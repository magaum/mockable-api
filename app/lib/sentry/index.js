//https://docs.sentry.io/platforms/node/express/
const Sentry = require("@sentry/node");
const { isUndefined } = require("lodash");
const environments = require("../../domain/helpers/environments");

const sentryDsn = process.env.SENTRY_DSN;

if (process.env.NODE_ENV === environments.PRODUCTION && isUndefined(sentryDsn)) {
    throw new Error("Sentry DSN not set");
};

Sentry.init({ dsn: sentryDsn });

exports.errorHandler = require("./error-handler");
exports.requestHandler = require("./request-handler");
