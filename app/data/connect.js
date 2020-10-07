const mongoose = require("mongoose");
const connectionOptions = require("./connection-options");
const updateDocumentVersionPlugin = require("./plugins/update-version-plugin");
const { logger } = require("../lib/logger");

module.exports = async () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error("URI para conexão com banco de dados não informada");
    }

    //https://mongoosejs.com/docs/plugins.html
    mongoose.plugin(updateDocumentVersionPlugin);

    return await mongoose.connect(mongoUri, connectionOptions, (err) => {
        if (!err) {
            logger("Mongo connected!")
            return;
        }

        logger(err);
        throw err;
    });
};
