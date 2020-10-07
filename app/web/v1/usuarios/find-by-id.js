const redis = require("../../../lib/redis")();
const { circuitBreaker } = require("../../../lib/circuit-breaker");
const { logger: logError } = require("../../../lib/logger");
const { captureEvent } = require("../../../lib/sentry");
const Usuario = require("../../../domain/usuario");

const circuit = circuitBreaker(async ({ params }) => {
    const usuario = await Usuario.schema.findOne({ _id: params });
    redis.set(params, JSON.stringify(usuario));
    return usuario;
});

/**
 * @swagger
 *
 *  /v1/usuarios/{id}:
 *      get:
 *          operationId: Listar usuario por id
 *          tags:
 *              - usuarios
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: Id do usuário
 *          summary: Listar usuario por id
 *          description: ""
 *          consumes: application/json
 *          responses:
 *              "200":
 *                  description: "Retorna um usuário"
 */
module.exports = async (req, res, next) =>
    circuit
        .fallback(async ({ params }) => {
            captureEvent({
                message: "Usuarios fallback, erro ao listar usuario por id",
            });
            return JSON.parse(await redis.get(params));
        })
        .fire(req)
        .then((usuarios) => {
            res.status(200).json(usuarios);
        })
        .catch((err) => {
            logError("Erro no endpoint /usuarios:", err);
            next(err);
        });
