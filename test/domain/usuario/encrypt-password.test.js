const { encryptPassword } = require("../../../app/domain/usuario");

describe("Encrypt Password", () => {
    it("shoud encrypt a given password", async () => {
        const password = "senhaTesteSuperSecreta";
        const hashedPassword = await encryptPassword(password);
        expect(hashedPassword).not.toEqual(password);
        expect(typeof hashedPassword).toEqual("string");
        expect(hashedPassword.length).toBeGreaterThan(0);
    });

    it("shoud throw error without password", async () => {
        await expect(encryptPassword()).rejects.toThrowError(
            "Password não pode ser vazio"
        );
    });
});
