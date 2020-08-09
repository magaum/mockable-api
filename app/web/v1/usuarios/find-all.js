const redis = require("../../../lib/redis")();
const { circuitBreaker } = require("../../../lib/circuit-breaker");
const { error } = require("../../../lib/logger");
const { captureEvent } = require("../../../lib/sentry");
const { rest } = require("lodash");

const circuit = circuitBreaker(async () => {
    const usuariosCache = await redis.get("usuarios");

    if (usuariosCache) {
        const usuariosCacheParsed = JSON.parse(usuariosCache);
        const countUsuarios = 0; //TODO: count nos usuarios cadastrados;

        if (usuariosCacheParsed.length === countUsuarios) {
            return usuariosCacheParsed;
        }

        redis.del("usuarios");
    }

    const usuarios = []; //TODO: buscar todos os usuários
    redis.set("usuarios", JSON.stringify(usuarios))

    return usuarios;
});

/**
 * @swagger
 *
 *  /usuarios:
 *      get:
 *          operationId: Listar todos
 *          tags:
 *              - usuarios
 *          summary: Listar usuarios
 *          description: ""
 *          consumes: application/json
 *          responses:
 *              "200":
 *                  description: "Lista de usuários"
 */
module.exports = async (req, res, next) => circuit
    .fallback(async () => {
        captureEvent({ message: "Usuarios fallback, erro ao listar usuarios" });
        return JSON.parse(await redis.get("usuarios"))
    })
    .fire()
    .then(usuarios => {
        res.status(200)
            .json(usuarios);
    })
    .catch((err) => {
        error("Erro no endpoint /usuarios:", err);
        next(err)
    });
