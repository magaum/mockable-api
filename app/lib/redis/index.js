const createConnection = require("./create-connection");
const { logger } = require("../logger");

let client = undefined;

function getClient() {
    if (typeof client === "undefined") {
        client = createConnection();
    }
    logger("Redis connected!");

    return client;
}

module.exports = getClient;
