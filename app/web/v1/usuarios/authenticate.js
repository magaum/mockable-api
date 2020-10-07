const { isEmpty } = require("lodash");
const { findByUsername, generateToken, matchPassword } = require("../../../domain/usuario");
const { circuitBreaker } = require("../../../lib/circuit-breaker");
const { logger } = require("../../../lib/logger");

const circuit = circuitBreaker(async ({ username }) => await findByUsername(username))

/**
 * @swagger
 *
 * components:
 *      schemas:
 *          Autenticacao:
 *              type: object
 *              properties:
 *                  username:
 *                      type: string
 *                  password:
 *                      type: string
 *
 *          Autenticacao-Response:
 *              type: object
 *              properties:
 *                  message:
 *                      type: string
 *                  token:
 *                      type: string
 *
 * /v1/usuarios/authenticate:
 *      post:
 *          operationId: Autenticacao usuario
 *          tags:
 *              - usuarios
 *          summary: Autenticacao de usuarios
 *          description: ""
 *          consumes: application/json
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Autenticacao'
 *          responses:
 *              200:
 *                  description: "Autenticacao com sucesso"
 *                  content:
 *                    application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Autenticacao-Response'
 *              401:
 *                  description: "Autenticacao sem sucesso"
 *                  content:
 *                    application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Autenticacao-Response'
 *
 */
module.exports = async (req, res, next) =>
    await circuit
        .fallback(() => {
            return res.status(500).json({
                message:
                    "Serviço indisponível no momento, tente novamente mais tarde",
            });
        })
        .fire(req.body)
        .then(async (usuario) => {
            const { password } = req.body;

            if (isEmpty(usuario))
                return res.status(404).json({ message: "Usuário não encontrado" })

            const isPasswordValid = await matchPassword(
                password,
                usuario.password
            );

            if (!isPasswordValid)
                return res.status(401).json({ message: "Senha inválida" });

            return res.status(200)
                .json({
                    token: generateToken({
                        username: usuario.username,
                        id: usuario._id,
                    })
                })
        })
        .catch((err) => {
            logger("Erro no endpoint POST /usuarios/authenticate:", err);
            next(err);
        });
