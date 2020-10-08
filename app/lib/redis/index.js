const createConnection = require("./create-connection");

let client;

function getClient() {
    if (typeof client === "undefined") {
        client = createConnection();
    }

    return client;
}

module.exports = getClient;
