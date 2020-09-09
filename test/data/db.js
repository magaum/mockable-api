const mongoose = require("mongoose");
let mongooseConnection;

exports.connect = async () => {
    mongooseConnection = await mongoose.connect(
        process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                process.exit(1);
            }
        }
    );
};
exports.disconnect = async () => {
    await mongooseConnection.disconnect();
};
