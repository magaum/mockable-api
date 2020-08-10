/**
 * @function updatePlugin - Plugin para interceptar a atualização de documentos e incrementar sua versão em 1
 *
 * @param  {MongooseSchema} schema
 * @param  {PluginOptions} _options
 */
module.exports = function (schema, _options) {
    schema.pre("findOneAndUpdate", function (next) {
        this.updateOne(
            {},
            { $inc: { __v: 1 }, $set: { modifiedDate: new Date() } }
        );
        return next();
    });
};
