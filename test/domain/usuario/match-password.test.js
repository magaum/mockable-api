const { matchPassword } = require("../../../app/domain/usuario");

describe("Match Password", () => {
    const password = "senhaTesteSuperSecreta";
    const hashedPassword =
        "$2b$05$AH9O6mtUlJ6qa7.xlAO4M.zRL2pKeOZJ0AtPrWe2bLsr8N.TrpDHi";

    it("should return true with correct password and hash", async () => {
        const result = await matchPassword(password, hashedPassword);
        expect(result).toBeTruthy();
    });

    it("should return false when passowrd and hash don't match", async () => {
        const hashedPassword = "senhaErrada";
        const result = await matchPassword(password, hashedPassword);
        expect(result).toBeFalsy();
    });

    it("should throw error when no password is sent", async () => {
        await expect(
            matchPassword(undefined, hashedPassword)
        ).rejects.toThrowError("Password não pode ser vazio");
    });

    it("should throw error when no hashed password is sent", async () => {
        await expect(matchPassword(password, undefined)).rejects.toThrowError(
            "PasswordHashed não pode ser vazio"
        );
    });
});
