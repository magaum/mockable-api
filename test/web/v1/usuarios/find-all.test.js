const findAll = require("../../../../app/web/v1/usuarios/find-all");

describe("find all tests", (() => {
    const req = jest.fn();
    const res = {
        status: jest.fn().mockImplementation(() => res),
        json: jest.fn()
    }
    const next = jest.fn();

    it("should call status and json functions", (() => {
        findAll(req, res, next);
        expect(res.status).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalled();
    }));
}))
