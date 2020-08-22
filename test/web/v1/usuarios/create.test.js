const create = require("../../../../app/web/v1/usuarios/create");
const db = require("../../../data/db");
const req = {
    body: {
        password: "test",
        username: "user",
        email: "user",
    },
};
const res = {
    status: jest.fn().mockImplementation(() => res),
    json: jest.fn(),
};
const next = jest.fn();

describe("create tests", () => {
    beforeAll(async () => await db.connect());

    afterAll(async () => await db.disconnect());

    it("should create Usuario and return a new one", async () => {
        const usuario = await create(req, res, next);
        expect(usuario).not.toBeUndefined();
        expect(usuario._id).not.toBeUndefined();
        //TODO: validar usuario cadastrado com get
    });
});
