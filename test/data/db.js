const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoServer = new MongoMemoryServer();

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

exports.connect = async () => {
    const connectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    };
    const mongoUri = await mongoServer.getUri();
    return await mongoose.connect(mongoUri, connectionOptions);
};
exports.disconnect = async () => {
    await mongoose.disconnect();
    return await mongoServer.stop();
};
