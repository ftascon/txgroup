import {SecondFactorSmsFactory} from "../../../../src/TxBlog/Domain/Factory/SecondFactorSmsFactory";
import {SpendeskSecondFactorSms} from "../../../../src/TxBlog/Domain/Entity/Sms/SpendeskSecondFactorSms";
import {config} from "../../../../src/config";
import {UnknownSecondFactorSms} from "../../../../src/TxBlog/Domain/Entity/Sms/UnknownSecondFactorSms";
import {CaixabankSecondFactorSms} from "../../../../src/TxBlog/Domain/Entity/Sms/CaixabankSecondFactorSms";

describe("Test sms object creation factory", () => {
    it("fails on creating object with unregistered number", () => {
        const smsFactory = new SecondFactorSmsFactory();
        expect(() => smsFactory.createSecondFactorSms("+19039172084",
            "Your one time password from Transact Payment Limited, for purchase on 08.10.2019 at 13:07:02 is: 123456",
        )).toThrowError(/Phone number not in platform/);
    });

    it("fails on creating object when having an unregistered provider", () => {
        config.sms.providers.push("UNTRACKEDPROVIDER");
        config.sms.phones.UNTRACKEDPROVIDER = ["123456789"];
        const smsFactory = new SecondFactorSmsFactory();
        expect(() => smsFactory.createSecondFactorSms("+123456789",
            "Your one time password from Transact Payment Limited, for purchase on 08.10.2019 at 13:07:02 is: 123456",
        )).toThrowError(/Provider not in platform/);
        config.sms.providers.pop();
        delete(config.sms.phones.UNTRACKEDPROVIDER);
    });

    it("creates spendesk sms object", () => {
        for (const provider in config.sms.phones) {
            if (config.sms.phones.hasOwnProperty(provider)) {
                for (const phone of config.sms.phones[provider]) {
                    const smsFactory = new SecondFactorSmsFactory();
                    const smsObject = smsFactory.createSecondFactorSms(phone,
                        "Your one time password from Transact Payment Limited, for purchase on 08.10.2019 at 13:07:02 is: 123456",
                    );
                    switch (provider) {
                        case "SPENDESK":
                            expect(smsObject).toBeInstanceOf(SpendeskSecondFactorSms);
                            break;
                        case "CAIXABANK":
                            expect(smsObject).toBeInstanceOf(CaixabankSecondFactorSms);
                            break;
                        case "UNKNOWN":
                            expect(smsObject).toBeInstanceOf(UnknownSecondFactorSms);
                            break;
                        default:
                            fail();
                    }
                }
            } else fail();
        }
    });
});
