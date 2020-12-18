import {SpendeskSecondFactorSms} from "../../../../../src/TxBlog/Domain/Entity/Sms/SpendeskSecondFactorSms";

describe("Test Second factor spendesk", () => {
    it("fails on request purchase date", () => {
        const sms = new SpendeskSecondFactorSms(
            "+19079172084",
            "Your one time password from Transact Payment Limited, for purchase on 08.1 0.2019 at 13:07:02 is: 123456",
        );

        expect(() => sms.getIdCode()).toThrowError(/Bad regex/);
    });

    it("fails on request code number", () => {
        const sms = new SpendeskSecondFactorSms(
            "+19079172084",
            "Your one time password from Transact Payment Limited, for purchase on 08.1 0.2019 at 13:07:02 is:   456",
        );

        expect(() => sms.getVerificationCode()).toThrowError(/Bad code/);
    });

    it("creates object correctly and get parameters", () => {
        const sms = new SpendeskSecondFactorSms(
            "+19079172084",
            "Your one time password from Transact Payment Limited, for purchase on 08.10.2019 at 13:07:02 is: 123456",
        );

        expect(sms.getIdCode()).toEqual("20191008_13:07:02");
        expect(sms.getVerificationCode()).toEqual("123456");
        expect(sms.provider).toEqual("SPENDESK");
    });
});
