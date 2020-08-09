const app = require("./app");
const { createServer } = require("http");
const { logger } = require("./lib/logger");

const port = process.env.PORT || 3000;

const server = createServer(app);

server.listen(port, () => {
    logger(`API is up and running in ${process.env.NODE_ENV} environment!`)
});
