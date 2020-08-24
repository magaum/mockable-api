const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
let mongoServer;
const { logger } = require("../../app/lib/logger");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

exports.connect = async () => {
    mongoServer = new MongoMemoryServer();
    const connectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    };
    const mongoUri = await mongoServer.getUri();
    return await mongoose.connect(mongoUri, connectionOptions, (err) => {
        if (err) {
            logger(err);
        }
    });
};
exports.disconnect = async () => {
    await mongoose.disconnect();
    return await mongoServer.stop();
};
