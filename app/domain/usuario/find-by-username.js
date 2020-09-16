const { schema } = require("./")
module.exports = async (username) => await schema.findOne({ username }).lean();
