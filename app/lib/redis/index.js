const createConnection = require("./create-connection");
const { logger } = require("../logger");

let client;

function getClient() {
    if (typeof client === "undefined") {
        client = createConnection();
    }
    logger("Redis connected!");

    return client;
}

module.exports = getClient;
