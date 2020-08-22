const create = require("../../../../../app/web/v1/usuarios/create");
const Usuario = require("../../../../../app/domain/usuario");

const req = {
    body: {
        password: "test",
        username: "user",
        email: "user"
    }
};
const res = {
    status: jest.fn().mockImplementation(() => res),
    json: jest.fn(),
};
const next = jest.fn();
describe("create tests", () => {

    Usuario.schema = jest.fn().mockImplementationOnce(() => { return { save: jest.fn() } });

    it("should call status and json functions", async () => {
        await create(req, res, next);
        expect(res.status).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalled();
    });
});
