const findAll = require("../../../../../app/web/v1/usuarios/find-all");
jest.mock("../../../../../app/lib/redis", () => {
    return jest.fn().mockImplementation(() => {
        return {
            set: jest.fn(),
            get: jest.fn(),
            del: jest.fn(),
        };
    });
});
describe("find all tests", () => {
    const req = jest.fn();
    const res = {
        status: jest.fn().mockImplementation(() => res),
        json: jest.fn(),
    };
    const next = jest.fn();

    it("should call status and json functions", async () => {
        await findAll(req, res, next);
        expect(res.status).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalled();
    });
});
