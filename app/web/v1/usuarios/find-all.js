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
module.exports = ((req, res, next) => {
    res.status(200)
        .json([]);
});
