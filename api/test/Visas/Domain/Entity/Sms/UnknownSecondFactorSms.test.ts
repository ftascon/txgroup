import {UnknownSecondFactorSms} from "../../../../../src/TxBlog/Domain/Entity/Sms/UnknownSecondFactorSms";

describe("Test Second factor unknown provider", () => {
    it("Default timestamp as idCode", () => {
        const sms = new UnknownSecondFactorSms(
            "+19079172084",
            "Your one time password from Transact Payment Limited, for purchase on 08.1 0.2019 at 13:07:02 is: 123456",
        );

        expect(typeof sms.getIdCode() === "string").toBeTruthy();
    });

    it("fails on request code number", () => {
        const sms = new UnknownSecondFactorSms(
            "+19079172084",
            "Your one time password from Transact Payment Limited, for purchase on 08.1 0.2019 at 13:07:02 is: 3sa456",
        );

        expect(sms.getVerificationCode()).toEqual("Undetermined");
    });

    it("creates object correctly and get parameters", () => {
        const sms = new UnknownSecondFactorSms(
            "+19079172084",
            "Your one time password from Transact Payment Limited, for purchase on 08.10.2019 at 13:07:02 is: 123456",
        );
        expect(sms.message).toEqual("Your one time password from Transact Payment Limited, for purchase on 08.10.2019 at 13:07:02 is: 123456");
        expect(sms.provider).toEqual("UNKNOWN");
    });
});
