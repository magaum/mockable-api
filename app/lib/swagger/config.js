// https://www.npmjs.com/package/swagger-jsdoc

module.exports = {
    openapi: "3.0.1",
    info: {
        title: "Mockable API",
        description: "API for manage mocks in development time",
        version: "1.0.0",
        contact: {
            name: "Weslei Luiz de Paula Pinto",
            url: "https://github.com/magaum",
            email: "weslei.paula@fatec.sp.gov.br"
        },
    },
    servers: [{
        url: "/api/v1"
    }],
    components: {
        securitySchemes: {
            Bearer: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                name: "Authorization",
                description: "Cole seu bearer token"
            },
        }
    },
    security: {
        Bearer: [],
        ApiKey: []
    },
};
