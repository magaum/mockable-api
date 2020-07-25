const app = require("./app");
const { createServer } = require("http");

const port = process.env.PORT || 3000;

const server = createServer(app);

server.listen(port, () => {
    console.info(`API is up and running in ${process.env.NODE_ENV} environment!`)
});
