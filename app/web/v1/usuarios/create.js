const { create } = require("../../../domain/usuario");
const { circuitBreaker } = require("../../../lib/circuit-breaker");
const { logger } = require("../../../lib/logger");

/**
 * @swagger
 *
 * components:
 *      schemas:
 *          Usuario:
 *              type: object
 *              properties:
 *                  password:
 *                      type: string
 *                  username:
 *                      type: string
 *                  email:
 *                      type: string
 *
 * /v1/usuarios:
 *      post:
 *          operationId: Criar usuario
 *          tags:
 *              - usuarios
 *          summary: Criar usuarios
 *          description: ""
 *          consumes: application/json
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          responses:
 *              201:
 *                  description: "Usuario criado"
 *                  content:
 *                    application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *
 */
module.exports = async (req, res, next) => circuitBreaker(async ({ body }) => create(body))
    .fallback(() => {
        res.status(503).json({
            message:
                "Serviço indisponível no momento, tente novamente mais tarde",
        });
    })
    .fire(req)
    .then((usuario) => {
        res.status(201).json(usuario);
        return usuario;
    })
    .catch((err) => {
        logger("Erro no endpoint POST /usuarios:", err);
        next(err);
    });
