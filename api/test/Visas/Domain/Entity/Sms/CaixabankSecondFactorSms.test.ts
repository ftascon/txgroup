import {CaixabankSecondFactorSms} from "../../../../../src/TxBlog/Domain/Entity/Sms/CaixabankSecondFactorSms";

describe("Test Second factor caixabank", () => {
    it("fails on request purchase date", () => {
        const sms = new CaixabankSecondFactorSms(
            "+2055461495",
            "CaixaBank: Compra por internet con tu tarjeta 12 34 en 600111222 de 463,44 SAR. Clave 327044. Recuerda NO compartirla NUNCA con terceros.",
        );

        expect(() => sms.getIdCode()).toThrowError(/Bad id code in second factor/);
    });

    it("fails on request code number", () => {
        const sms = new CaixabankSecondFactorSms(
            "+2055461495",
            "CaixaBank: Compra por internet con tu tarjeta 1234 en 600111222 de 463,44 SAR. Clave 327 044. Recuerda NO compartirla NUNCA con terceros.",
        );

        expect(() => sms.getVerificationCode()).toThrowError(/Bad code/);
    });

    it("creates object correctly and get parameters", () => {
        const sms = new CaixabankSecondFactorSms(
            "+2055461495",
            "CaixaBank: Compra por internet con tu tarjeta 1234 en 600111222 de 463,44 SAR. Clave 327044. Recuerda NO compartirla NUNCA con terceros.\n",
        );

        expect(sms.getIdCode()).toEqual("1234");
        expect(sms.getVerificationCode()).toEqual("327044");
        expect(sms.provider).toEqual("CAIXABANK");
    });
});
