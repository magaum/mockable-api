const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoServer = new MongoMemoryServer();

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
